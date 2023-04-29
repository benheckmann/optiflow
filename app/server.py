import os
import json
import uuid
from typing import List

import openai
from dotenv import load_dotenv
from flask import Flask, session, Blueprint, request

from flask_cors import CORS

from app.api_types import BusinessArea, Process, ProcessQuestion, Recommendation
from app.crawler import get_company_info
from app.examples_session import EXAMPLE_SESSION
from app.gpt import ask_gpt
from app.promts.businessfunc2processes import *
from app.promts.crawler import *
from app.promts.general import *
from app.utils import get_business_areas
from app.promts.info2businessfunc import *  # NOQA

app = Flask(__name__)
app.secret_key = os.getenv("FLASK_SECRET_KEY")
CORS(app, origins=["http://localhost:3000"])  # default address of Next.js dev frontend
api = Blueprint("api", __name__, url_prefix="/api")

MOCK_ACTIVATED = True


@app.before_request
def before_request():
    if "session_id" not in session:
        session["session_id"] = str(uuid.uuid4())
        session.setdefault("session_data", {})


@api.route("/example", methods=["POST"])
def example() -> str:
    input = request.json
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        temperature=0,
        messages=[
            {"role": "system", "content": SYSTEM_MESSAGE},
            {"role": "user", "content": BUSINESS_AREA_TO_PROCESSES_INSTRUCTION},
            {"role": "user", "content": BUSINESS_AREA_TO_PROCESSES_EXAMPLE_INPUT},
            {"role": "assistant", "content": BUSINESS_AREA_TO_PROCESSES_EXAMPLE_OUTPUT},
            {"role": "user", "content": str(input)},
        ],
    )
    llm_answer = response.choices[0].message.content
    business_area_update = {"processes": json.loads(llm_answer)}
    get_business_areas(session, input["title"]).update(business_area_update)
    return llm_answer


@api.route("/business-areas", methods=["POST"])
def url_to_business_areas():
    if MOCK_ACTIVATED:
        return INFORMATION_TO_BUSINESS_AREA_MOCK
    else:
        company_url = request.json.get('url')  # @TODO requires a json object containig the company url
        company_information = get_company_info(company_url)  # @TODO multithread to make it faster
        messages = [
            {"role": "system", "content": SYSTEM_MESSAGE},
            {"role": "user", "content": INFORMATION_TO_BUSINESS_AREA_INSTRUCTION_SHORTED},
            {"role": "user", "content": INFORMATION_TO_BUSINESS_AREA_EXAMPLE_INPUT},
            {"role": "assistant", "content": INFORMATION_TO_BUSINESS_AREA_EXAMPLE_OUTPUT},
            {"role": "user", "content": str(company_information)}
        ]
        llm_answer, tokens_spend = ask_gpt(messages)
        app.logger.info('tokens spend: %s', tokens_spend)

        # TODO logic for updating the session
        # business_area_update = {"processes": json.loads(llm_answer)}
        # get_business_areas(session, input["title"]).update(business_area_update)
        return llm_answer


@api.route("/processes", methods=["POST"])
def get_processes():
    if MOCK_ACTIVATED:
        return BUSINESS_AREA_TO_PROCESSES_MOCK
    else:
        business_functions = request.json
        chosen_business_function = business_functions[1]
        # TODO import business functions as basis from session

        messages = [
            {"role": "system", "content": SYSTEM_MESSAGE},
            {"role": "user", "content": BUSINESS_AREA_TO_PROCESSES_INSTRUCTION},
            # TODO add company description
            {"role": "user", "content": INFORMATION_TO_BUSINESS_AREA_EXAMPLE_INPUT},
            {"role": "assistant", "content": INFORMATION_TO_BUSINESS_AREA_EXAMPLE_OUTPUT},
            {"role": "user", "content": str(chosen_business_function)}
        ]
        llm_answer, tokens_spend = ask_gpt(messages)
        app.logger.info('tokens spend: %s', tokens_spend)
        return llm_answer


@api.route("/process-questions", methods=["POST"])
def get_process_questions() -> ProcessQuestion:
    # note: subsequent questions will be based on answers; tbd how this interaction is represented here
    pass


@api.route("/recommendations", methods=["POST"])
def get_recommendations() -> List[Recommendation]:
    pass


if __name__ == "__main__":
    load_dotenv()
    openai.api_key = os.getenv("OPENAI_API_KEY")
    app.register_blueprint(api)
    app.run(debug=True)
