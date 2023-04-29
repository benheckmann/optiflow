import os
import json
import uuid
from typing import List

import openai
from dotenv import load_dotenv
from flask import Flask, session, Blueprint, request

from flask_cors import CORS

from api_types import BusinessArea, Process, ProcessQuestion, Recommendation
from examples_session import EXAMPLE_SESSION
from utils import get_business_areas
from prompts import *  # NOQA

app = Flask(__name__)
app.secret_key = os.getenv("FLASK_SECRET_KEY")
CORS(app, origins=["http://localhost:3000"])  # default address of Next.js dev frontend
api = Blueprint("api", __name__, url_prefix="/api")


@app.before_request
def before_request():
    if "session_id" not in session:
        session["session_id"] = str(uuid.uuid4())
        session.setdefault("session_data", {})


@api.route("/hello-world", methods=["GET"])
def hello_world() -> str:
    return "Hello, world!"


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
def url_to_business_areas() -> BusinessArea:
    # scrape (Florian)
    mock_scraped_pages = EXAMPLE_SESSION["scraped_pages"]
    # extract information / structure (Max)
    pass


@api.route("/processes", methods=["POST"])
def get_processes() -> Process:
    mock_respones = {
        "title": "Buy Stairs",
        "description": "Buy Stairs that will be installed later",
        "process_questions": [],
        "recommendations": [],
    }
    return mock_respones


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
