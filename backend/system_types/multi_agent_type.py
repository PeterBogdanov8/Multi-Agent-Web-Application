from enum import Enum


class MultiAgentType(str, Enum):
    DiverseMultiAgentType = "DiverseMultiAgent",
    GeneticMultiAgentType = "GeneticMultiAgent",
    SimulatedAnnealingMultiAgentType = "SimulatedAnnealingMultiAgent"