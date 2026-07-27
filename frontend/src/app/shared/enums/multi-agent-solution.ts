import { Candidate } from "../models/candidate";
import { Task } from "./task";

export interface MultiAgentSolution {
    task: Task,
    solution: Candidate[]
}
