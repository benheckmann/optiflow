import os
import json
import uuid
from typing import List

import openai
from dotenv import load_dotenv
from flask import Flask, session, Blueprint

from flask_cors import CORS

from app.api_types import BusinessArea, Process, ProcessQuestion, Recommendation
from prompts import *  # NOQA

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])  # default address of Next.js dev frontend
api = Blueprint("api", __name__, url_prefix="/api")


@app.before_request
def before_request():
    # check if the user has a session ID
    if "session_id" not in session:
        # if the user doesn't have a session ID, generate a new one
        session["session_id"] = str(uuid.uuid4())


@api.route("/example", methods=["POST"])
def example() -> str:
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are ChatGPT, a helpful AI assistant."},
            {"role": "user", "content": "What is the capital of france?"},
        ],
    )
    llm_result = json.loads(response.choices[0].message.content)
    return llm_result


@api.route("/business-areas", methods=["POST"])
def get_business_areas() -> BusinessArea:
    pass


@api.route("/processes", methods=["POST"])
def get_processes() -> Process:
    pass


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
    app.run(debug=True)
