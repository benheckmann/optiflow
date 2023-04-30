import openai
import os
from dotenv import load_dotenv


def ask_gpt(messages) -> [str, str]:
    load_dotenv()
    openai.api_key = os.getenv("OPENAI_API_KEY")
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        temperature=0,
        messages=messages,
    )
    tokens_spend = str(response["usage"]["total_tokens"])
    return response.choices[0].message.content, tokens_spend
