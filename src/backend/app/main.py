from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field
import os, smtplib, ssl
from email.message import EmailMessage

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

class Project(BaseModel):
    id: str
    name: str
    description: str
    tags: list[str]
    repoUrl: str | None = None
    liveUrl: str | None = None

PROJECTS = [
    Project(
        id="crypto-tracker",
        name="Crypto Tracker",
        description="Crypto Coin tracker website with AI suggestion.",
        tags=["Next.js", "TypeScript", "Tailwind", "Python", "Django", "Flask"],
        liveUrl="https://crypto-tracker.vercel.app",
        repoUrl="https://github.com/xStevenTP/CryptoTracker",
    ),
]

@app.get("/health")
async def health():
    return {"ok": True}

@app.get("/projects", response_model=list[Project])
async def list_projects():
    return PROJECTS

@app.post("/contact")
async def contact(msg: ContactMessage):
    SMTP_HOST = os.getenv("SMTP_HOST")
    SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
    SMTP_USER = os.getenv("SMTP_USER")
    SMTP_PASS = os.getenv("SMTP_PASS")
    TO_EMAIL  = os.getenv("TO_EMAIL", "steventuanpham@gmail.com")

    if not all([SMTP_HOST, SMTP_USER, SMTP_PASS, TO_EMAIL]):
        raise HTTPException(status_code=500, detail="Email not configured")

    email = EmailMessage()
    email["Subject"] = f"Portfolio contact from {msg.name}"
    email["From"] = SMTP_USER
    email["To"] = TO_EMAIL
    email.set_content(f"From: {msg.name} <{msg.email}>\n\n{msg.message}")

    context = ssl.create_default_context()
    with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
        server.starttls(context=context)
        server.login(SMTP_USER, SMTP_PASS)
        server.send_message(email)

    return {"ok": True, "sent": True}
