from pydantic import BaseModel


class PayloadTask(BaseModel):
    budget: int
    job: str