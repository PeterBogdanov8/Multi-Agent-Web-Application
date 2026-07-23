from pydantic import BaseModel

from payloads.payload_task import PayloadTask
from system_types.multi_agent_type import MultiAgentType
from task.task import Task


class MultiAgentPayload(BaseModel):
    mult_agent_type: MultiAgentType
    tasks: list[PayloadTask]