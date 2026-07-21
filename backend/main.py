from math import log

from fastapi import FastAPI

from agent_types.agent_type import AgentType
from agents.search_agent import SearchAgent
from agents.simulated_annealing_agent import SimulatedAnnealingAgent
from candidate.candidate_loader import CandidateLoader

app = FastAPI()

@app.get("/get-single-agent-candidates/{budget}/{job}/{agent_type}")
def get_single_agent_candidates(budget: int, job: str, agent_type: AgentType):
    candidate_loader = CandidateLoader('data/candidates.json')
    candidates = candidate_loader.get_candidates()
    solution = None
    
    match agent_type:
        case AgentType.SimulatedAnnealingAgentType:
            sa_agent = SimulatedAnnealingAgent(budget, job, candidates)
            solution = sa_agent.solve_problem(lambda x: log(x, 10))
        case AgentType.SearchAgentType:
            search_agent = SearchAgent(budget, job, candidates)
            solution = search_agent.expected_employer_vs_employee_pay_search()
    return solution