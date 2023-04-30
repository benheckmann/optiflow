import os
import uuid
from typing import List

import openai
from dotenv import load_dotenv
from flask import Flask, session, Blueprint, request, jsonify
from flask_cors import CORS

from api_types import LLMBusinessArea, UserSession, FrontEndUserSession
from api_types import Process, Recommendation
from app.promts.recommendations import PROCESS_TO_RECOMMENDATIONS_MOCK
from crawler import get_company_info
from database_utils import Database
from gpt import ask_gpt
from promts.businessfunc2processes import *  # NOQA
from promts.general import SYSTEM_MESSAGE, USER_SESSION_MOCK, FRONT_END_USER_SESSION_MOCK
from promts.info2businessfunc import *  # NOQA
from promts.processes2questions import *  # NOQA

app = Flask(__name__)
app.secret_key = os.getenv("FLASK_SECRET_KEY")
CORS(app, origins=["http://localhost:3000"])  # default address of Next.js dev frontend
# database = Database(app.logger)

PRESENTATION_MODE = True


@app.before_request
def before_request():
    if "session_id" not in session:
        session["session_id"] = str(uuid.uuid4())
        session.setdefault("session_data", {})


@app.route("/api/example", methods=["POST"])
def example() -> str:
    input = request.json
    response = openai.ChatCompletion.create(
        temperature=0,
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": SYSTEM_MESSAGE},
            {"role": "user", "content": BUSINESS_AREA_TO_PROCESSES_INSTRUCTION},
            {"role": "user", "content": BUSINESS_AREA_TO_PROCESSES_EXAMPLE_INPUT},
            {"role": "assistant", "content": BUSINESS_AREA_TO_PROCESSES_EXAMPLE_OUTPUT},
            {"role": "user", "content": str(input)},
        ],
    )
    llm_answer = response.choices[0].message.content
    return llm_answer


@app.route("/api/business-areas", methods=["POST"])
def url_to_business_areas() -> List[LLMBusinessArea]:
    if PRESENTATION_MODE:
        return jsonify(INFORMATION_TO_BUSINESS_AREA_MOCK)
    company_url = request.json.get(
        "url"
    )  # @TODO requires a json object containig the company url
    company_information = get_company_info(
        company_url
    )  # @TODO multithread to make it faster
    messages = [
        {"role": "system", "content": SYSTEM_MESSAGE},
        {
            "role": "user",
            "content": INFORMATION_TO_BUSINESS_AREA_INSTRUCTION_SHORTED,
        },
        {"role": "user", "content": INFORMATION_TO_BUSINESS_AREA_EXAMPLE_INPUT},
        {
            "role": "assistant",
            "content": INFORMATION_TO_BUSINESS_AREA_EXAMPLE_OUTPUT,
        },
        {"role": "user", "content": str(company_information)},
    ]
    llm_answer, tokens_spend = ask_gpt(messages)
    app.logger.info("tokens spend: %s", tokens_spend)

    # TODO logic for updating the session
    # business_area_update = {"processes": json.loads(llm_answer)}
    # get_business_areas(session, input["title"]).update(business_area_update)
    return llm_answer


@app.route("/api/processes", methods=["POST"])
def get_processes() -> List[Process]:
    """return variable amount"""
    if PRESENTATION_MODE:
        return jsonify(BUSINESS_AREA_TO_PROCESSES_MOCK_NEW)
    business_functions = request.json
    chosen_business_function = business_functions[1]
    # TODO import business functions as basis from session

    messages = [
        {"role": "system", "content": SYSTEM_MESSAGE},
        {"role": "user", "content": BUSINESS_AREA_TO_PROCESSES_INSTRUCTION},
        # TODO add company description
        {"role": "user", "content": INFORMATION_TO_BUSINESS_AREA_EXAMPLE_INPUT},
        {
            "role": "assistant",
            "content": INFORMATION_TO_BUSINESS_AREA_EXAMPLE_OUTPUT,
        },
        {"role": "user", "content": str(chosen_business_function)},
    ]
    llm_answer, tokens_spend = ask_gpt(messages)
    app.logger.info("tokens spend: %s", tokens_spend)
    return llm_answer


@app.route("/api/process-questions", methods=["POST"])
def get_process_questions() -> List[str]:
    """
    input: { "project_index": <i>, "process_name": <name>, "process_description": <desc> }
    output: exactly five questions
    """
    if PRESENTATION_MODE:
        return jsonify(PROCESSES_TO_QUESTIONS_MOCK)
    input = request.json
    input["company_name"] = session.get("session_data", {}).get(
        "company_name", "unknown"
    )
    input["company_description"] = session.get("session_data", {})[
        input.get("project_index", 0)
    ]
    messages = [
        {"role": "system", "content": SYSTEM_MESSAGE},
        {"role": "user", "content": PROCESSES_TO_QUESTIONS_INSTRUCTION},
        {"role": "user", "content": PROCESSES_TO_QUESTIONS_EXAMPLE_INPUT},
        {"role": "assistant", "content": PROCESSES_TO_QUESTIONS_EXAMPLE_OUTPUT},
        {"role": "user", "content": str(input)},
    ]
    llm_answer, tokens_spent = ask_gpt(messages)
    app.logger.info("tokens spend: %s", tokens_spent)
    return llm_answer


@app.route("/api/recommendations", methods=["POST"])
def get_recommendations() -> List[Recommendation]:
    if PRESENTATION_MODE:
        return jsonify(PROCESS_TO_RECOMMENDATIONS_MOCK)
    else:
        # database.query("Select * from ")
        return []


@app.route("/api/get-all-projects", methods=["GET"])
def get_all_projects() -> UserSession:
    if PRESENTATION_MODE:
        return jsonify(USER_SESSION_MOCK)
    return []


@app.route("/api/get-front-end-user-session", methods=["GET"])
def get_front_end_user_session() -> FrontEndUserSession:
    if PRESENTATION_MODE:
        return FRONT_END_USER_SESSION_MOCK
    return {}


if __name__ == "__main__":
    load_dotenv()
    openai.api_key = os.getenv("OPENAI_API_KEY")
    app.run(debug=True)
