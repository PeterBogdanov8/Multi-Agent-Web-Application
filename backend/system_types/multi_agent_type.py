from enum import Enum


class MultiAgentType(str, Enum):
    DiverseMultiAgentType = ("DiverseMultiAgent",)
    SearchMultiAgentType = ("SearchMultiAgent",)
    GeneticMultiAgentType = ("GeneticMultiAgent",)
    SimulatedAnnealingMultiAgentType = "SimulatedAnnealingMultiAgent"
