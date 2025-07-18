from fastapi import FastAPI
from app.routes.users import profile
from app.routes.users import orders
from app.routes.users import reviews

app = FastAPI(title="StarScope Backend")

app.include_router(users.router, prefix="/auth", tags=["User Auth"])

# User routes
app.include_router(profile.router, prefix="/users", tags=["User Profile"])
app.include_router(subscription.router, prefix="/orders", tags=["Subscriptions"])
app.include_router(reviews.router, prefix="/reviews", tags=["Reviews"])

'''
from fastapi import FastAPI, Depends, Request
from fastapi.responses import RedirectResponse
from sqlalchemy.orm import Session
from authlib.integrations.starlette_client import OAuth
from starlette.middleware.sessions import SessionMiddleware
import os
from database import SessionLocal, engine
from models import User, Base
from dotenv import load_dotenv

load_dotenv()

Base.metadata.create_all(bind=engine)

app = FastAPI()
app.add_middleware(SessionMiddleware, secret_key=os.getenv("SECRET_KEY"))

# OAuth config
oauth = OAuth()
oauth.register(
    name='google',
    client_id=os.getenv("GOOGLE_CLIENT_ID"),
    client_secret=os.getenv("GOOGLE_CLIENT_SECRET"),
    server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
    client_kwargs={
        'scope': 'openid email profile'
    }
)

# DB Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def index():
    return {"msg": "Welcome to Google Login API"}

@app.get("/login")
async def login(request: Request):
    redirect_uri = request.url_for("auth")
    return await oauth.google.authorize_redirect(request, redirect_uri)

@app.get("/auth")
async def auth(request: Request, db: Session = Depends(get_db)):
    token = await oauth.google.authorize_access_token(request)
    user_info = token.get("userinfo")

    if not user_info:
        user_info = await oauth.google.parse_id_token(request, token)

    user = db.query(User).filter(User.email == user_info["email"]).first()

    if not user:
        user = User(
            email=user_info["email"],
            name=user_info["name"],
            picture=user_info["picture"]
        )
        db.add(user)
        db.commit()
        db.refresh(user)

    return {"msg": "Login successful", "user": {"name": user.name, "email": user.email}}
'''
