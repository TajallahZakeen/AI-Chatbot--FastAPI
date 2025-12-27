from fastapi import FastAPI
from pydantic import BaseModel
from app.chatbot_engine import chatbot_function

app = FastAPI(title="AI Chatbot")

class ChatRequest(BaseModel):
    message: str


@app.get("/")
def root():
    return {"status": "AI Chatbot is running"}


@app.post("/chat")
def chat(req: ChatRequest):
    reply = chatbot_function(req.message)
    return {"reply": reply}
