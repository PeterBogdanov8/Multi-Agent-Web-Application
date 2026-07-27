import { MultiAgentType } from "./multi-agent-type";
import { Task } from "./task";

export interface MultiAgentPayload {
    tasks: Task[],
    mult_agent_type: MultiAgentType
}
