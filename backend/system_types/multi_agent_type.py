from enum import Enum


class MultiAgentType(str, Enum):
    HomogeneousMultiAgentType = "HomogeneousMultiAgent",
    GeneticMultiAgentType = "GeneticMultiAgent",
    SimulatedAnnealingMultiAgentType = "SimulatedAnnealingMultiAgent"