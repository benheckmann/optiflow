import os
import json

import openai
from dotenv import load_dotenv
from flask import Flask, request, Blueprint

from flask_cors import CORS

from prompts import *  # NOQA

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])  # default address of Next.js dev frontend
api = Blueprint("api", __name__, url_prefix="/api")


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


if __name__ == "__main__":
    load_dotenv()
    openai.api_key = os.getenv("OPENAI_API_KEY")
    app.run(debug=True)
