import os
from openai import OpenAI


def chatbot_function(user_input: str):
    client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

    response = client.chat.completions.create(
        model=os.getenv("OPENAI_MODEL", "gpt-4o-mini"),
        messages=[
            {"role": "user", "content": user_input}
        ]
    )

    return response.choices[0].message.content
