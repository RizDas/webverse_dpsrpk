from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def list_subscription():
    return [{"order_id": 101, "status": "received"}]
