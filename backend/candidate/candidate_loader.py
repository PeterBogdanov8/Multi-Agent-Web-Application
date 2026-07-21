import json

from candidate.candidate import Candidate


class CandidateLoader:
    def __init__(self, candidates_path):
        self.candidates_path = candidates_path

    def get_candidates(self):
        candidates_file = open(self.candidates_path, 'r')
        candidates_data = json.load(candidates_file)
        candidates = []
        identifier = 1
        for candidate in candidates_data:
            age = candidate["Age"]
            gender = candidate["Gender"]
            education_level = candidate["Education Level"]
            job = candidate["Job Title"]
            experience = candidate["Years of Experience"]
            salary = candidate["Salary"]
            candidates.append(Candidate(identifier, age, gender, education_level, job, experience, salary))
            identifier += 1
        candidates_file.close()
        return candidates
