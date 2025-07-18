from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# import routers
from app.auth import users  
from app.routes.users import profile, subscription, reviews

app = FastAPI(title="StarScope Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],            
    allow_credentials=True,
    allow_methods=["*"],            
    allow_headers=["*"],           
)

app.include_router(users.router, prefix="/auth", tags=["User Auth"])
app.include_router(profile.router, prefix="/users", tags=["User Profile"])
app.include_router(subscription.router, prefix="/orders", tags=["Subscriptions"])
app.include_router(reviews.router, prefix="/reviews", tags=["Reviews"])
