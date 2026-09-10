from candidate.candidate import Candidate


class Agent:
    def __init__(self, budget: int, job: str, candidates: list[Candidate]):
        self.budget = budget
        self.job = job
        self.candidates = list(filter(self.get_candidate_by_job, candidates))
        self.historical_rewards = []

    def get_candidate_by_job(self, candidate: Candidate):
        return str.__contains__(candidate.job, self.job)

    def get_total_rewards(self, solution):
        expense = 0
        rewards = 0
        for candidate in solution:
            rewards += self.get_candidate_score(candidate)
            expense += candidate.salary

        if expense > self.budget:
            return 0
        else:
            return rewards

    def get_candidate_score(self, candidate: Candidate):
        return self.get_education_level_score(candidate)

    def get_education_level_score(self, candidate: Candidate):
        match candidate.education_level:
            case "Bachelor's":
                return 6
            case "Master's":
                return 8
            case "PhD":
                return 10
            case _:
                return 0

    def print_candidates(self, candidates: list[Candidate]):
        for candidate in candidates:
            print("-----------------------")
            candidate.print_candidate()
