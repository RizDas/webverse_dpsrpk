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

