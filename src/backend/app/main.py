from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field
import os, smtplib, ssl
from email.message import EmailMessage

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
    SMTP_HOST = os.getenv("SMTP_HOST")
    SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
    SMTP_USER = os.getenv("SMTP_USER")
    SMTP_PASS = os.getenv("SMTP_PASS")
    TO_EMAIL_DEFAULT = os.getenv("TO_EMAIL", "steventuanpham@gmail.com")
    TO_EMAIL_REALTY  = os.getenv("TO_EMAIL_REALTY", "spham@privirealty.com")
    TO_EMAIL = TO_EMAIL_REALTY if msg.topic == "realty" else TO_EMAIL_DEFAULT

    if not all([SMTP_HOST, SMTP_USER, SMTP_PASS, TO_EMAIL]):
        print("⚠️ Email not configured. Message received:")
        print(f"From: {msg.name} <{msg.email}>")
        print(msg.message)
        raise HTTPException(status_code=500, detail="Email not configured")

    email = EmailMessage()
    topic_label = f" [{msg.topic}]" if msg.topic else ""
    email["Subject"] = f"Portfolio contact{topic_label} from {msg.name}"
    email["From"] = SMTP_USER
    email["To"] = TO_EMAIL
    body_topic = f"Topic: {msg.topic}\n\n" if msg.topic else ""
    email.set_content(f"From: {msg.name} <{msg.email}>\n{body_topic}{msg.message}")

    context = ssl.create_default_context()
    with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
        server.starttls(context=context)
        server.login(SMTP_USER, SMTP_PASS)
        server.send_message(email)

    return {"ok": True, "sent": True}
