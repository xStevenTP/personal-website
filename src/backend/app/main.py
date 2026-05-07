from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field
import os
import httpx

try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass

app = FastAPI(title="Resume API", version="1.0.0")

ALLOWED_ORIGINS = [os.getenv("FRONTEND_URL", "http://localhost:3000")]
app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

class ContactMessage(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    email: EmailStr
    message: str = Field(min_length=1, max_length=5000)
    topic: str | None = None


@app.get("/health")
async def health():
    return {"ok": True}

@app.post("/contact")
async def contact(msg: ContactMessage):
    RESEND_API_KEY = os.getenv("RESEND_API_KEY")
    MAIL_FROM = os.getenv("MAIL_FROM", "onboarding@resend.dev")
    TO_EMAIL_DEFAULT = os.getenv("TO_EMAIL", "steventuanpham@gmail.com")
    TO_EMAIL_REALTY  = os.getenv("TO_EMAIL_REALTY", "spham@privirealty.com")
    to_email = TO_EMAIL_REALTY if msg.topic == "realty" else TO_EMAIL_DEFAULT

    if not RESEND_API_KEY:
        print("⚠️ Email not configured. Message received:")
        print(f"From: {msg.name} <{msg.email}>")
        print(msg.message)
        raise HTTPException(status_code=500, detail="Email not configured")

    topic_label = f" [{msg.topic}]" if msg.topic else ""
    body_topic = f"Topic: {msg.topic}\n\n" if msg.topic else ""

    async with httpx.AsyncClient(timeout=10.0) as client:
        res = await client.post(
            "https://api.resend.com/emails",
            headers={"Authorization": f"Bearer {RESEND_API_KEY}"},
            json={
                "from": MAIL_FROM,
                "to": [to_email],
                "reply_to": msg.email,
                "subject": f"Portfolio contact{topic_label} from {msg.name}",
                "text": f"From: {msg.name} <{msg.email}>\n{body_topic}{msg.message}",
            },
        )

    if res.status_code >= 400:
        print(f"Resend error {res.status_code}: {res.text}")
        raise HTTPException(status_code=502, detail="Mail provider error")

    return {"ok": True, "sent": True}
