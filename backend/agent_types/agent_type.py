from enum import Enum


class AgentType(str, Enum):
    SimulatedAnnealingAgentType = "SimulatedAnnealingAgent"
    SearchAgentType = "SearchAgent"
    GeneticAgentType = "GeneticAgent"

    