from math import log
from fastapi import FastAPI

from multi_agent_system import MultiAgentSystem
from payloads.multi_agent_payload import MultiAgentPayload
from system_types.agent_type import AgentType
from agents.dynamic_programming_agent import DynamicProgrammingAgent
from agents.genetic_agent import GeneticAgent
from agents.search_agent import SearchAgent
from agents.simulated_annealing_agent import SimulatedAnnealingAgent
from candidate.candidate_loader import CandidateLoader
from task.task import Task

app = FastAPI()
candidate_loader = CandidateLoader('data/candidates.json')
candidates = candidate_loader.get_candidates()

@app.get("/get-single-agent-candidates/{budget}/{job}/{agent_type}")
def get_single_agent_candidates(budget: int, job: str, agent_type: AgentType):
    solution = None
    
    match agent_type:
        case AgentType.SimulatedAnnealingAgentType:
            sa_agent = SimulatedAnnealingAgent(budget, job, candidates)
            solution = sa_agent.solve_problem(lambda x: log(x, 10))
        case AgentType.SearchAgentType:
            search_agent = SearchAgent(budget, job, candidates)
            solution = search_agent.expected_employer_vs_employee_pay_search()
        case AgentType.GeneticAgentType:
            genetic_agent = GeneticAgent(budget, job, candidates)
            solution = genetic_agent.choose_candidates(True, 0.02, 20)
        case AgentType.DynamicProgrammingAgentType:
            dp_agent = DynamicProgrammingAgent(budget, job, candidates)
            solution = dp_agent.solve_problem();
    return solution

@app.get("/get-multi-agent-candidates")
def get_multi_agent_candidates(payload: MultiAgentPayload):
    tasks = [
        Task(**payload_task.model_dump()) for payload_task in payload.tasks
    ]
    multi_agent_system = MultiAgentSystem(payload.mult_agent_type, tasks, candidates)
    return multi_agent_system.assign_candidate_to_roles()