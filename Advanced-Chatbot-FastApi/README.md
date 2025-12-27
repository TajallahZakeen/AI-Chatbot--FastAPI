## Authors
Name:       Tajallah

Student ID: 22PWDSC0057


## 🚀 About Me
🎓 Data Science Student

🤖 AI & LLM Enthusiast

🌐 Backend & API Developer

🚀 Interested in real-world AI applications


# LLM-Powered Chatbot (ChatGPT-Like Web Application
This project is a ChatGPT-like AI chatbot that enables users to interact with an intelligent conversational agent through a web interface.
The chatbot uses Large Language Models (LLMs) to generate context-aware, human-like responses in real time.

The system is built using FastAPI for the backend and integrates with OpenAI GPT models for AI intelligence.


## Project Overview
This project is a full-stack AI chatbot web application inspired by ChatGPT and Google Gemini.
It allows users to interact with a conversational AI through a modern web interface. The backend is built using FastAPI, while the AI intelligence is powered by Large Language Models (LLMs) such as OpenAI GPT.

The goal of this project is to demonstrate backend API development, frontend integration, AI/LLM usage, and system design, aligned with the topics covered during the semester.
## ✨ Features
💬 Real-time chatbot interaction

🧠 LLM-powered intelligent responses

🔁 Conversation memory (context handling)

🌐 REST API backend

🔐 Secure API key handling

🚀 Deployable application

## System Architecture
The system follows a client–server architecture. The frontend handles user interaction, while the backend processes requests and communicates with an LLM API to generate responses.
## 🎯 Project Objectives
Build a complete AI-powered web application

Integrate LLMs (Large Language Models)

Demonstrate backend API development

Apply AI concepts practically

Deploy a functional AI system
## 🛠️ Tech Stack
## Frontend

HTML

CSS

JavaScript

## Backend

Python

FastAPI

Uvicorn

## AI / LLM

OpenAI GPT (Large Language Model)

## Tools

GitHub

Render (Deployment)
## Installation

Clone the Repository

```bash
  git clone https://github.com/your-Tajallah Zakeen/Advanced-Chatbot-FastApi.git
cd Advanced-Chatbot-FastApi

```

## Run Locally

Create Virtual Environment

```bash
 python -m venv .venv


```

Activate:

```bash
  .venv\Scripts\activate

```

Install Dependencies

```bash
  pip install -r requirements.txt

```

Start the server

```bash
  uvicorn app.main:app --reload

```

Open browser:
```bash
http://127.0.0.1:8000
```

## Environment Variables

Create a .env file in the project root:

`OPENAI_API_KEY=your_openai_api_key_here
`




## Usage/Examples

```javascript
User: Explain artificial intelligence in simple words
Bot: Artificial intelligence is the ability of machines to think and learn like humans...
```


## API Reference

#### Chat Endpoint

```http
  POST /chat
```
#### Request Body

```http
  {
  "message": "Hello"
}

```
#### Response
```http
{
  "response": "Hello! How can I help you today?"
}

```

## Deployment

🔗 Live URL:

```bash
  http://127.0.0.1:8000/docs

```


## Used By

Students learning AI

Backend developers

Academic AI projects


## License
This project is for educational purposes only.

## Screenshot

C:\Users\Admin\Desktop\Advanced-Chatbot-FastApi\Chatbot.JPG
## Appendix

This project was developed as a Semester Project and fulfills all required academic criteria


## Roadmap
Add user authentication

Add conversation history storage

Support multiple LLM providers

Improve UI/UX


## FAQ

#### Is this project rule-based?

Answer:No, it uses LLMs for intelligent responses.

#### Is it deployable?

Answer:Yes, it can be deployed on cloud platforms.

