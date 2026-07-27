import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { AgentType } from '../shared/enums/agent-type';
import { Observable } from 'rxjs';
import { Candidate } from '../shared/models/candidate';
import { Task } from '../shared/enums/task';
import { MultiAgentType } from '../shared/enums/multi-agent-type';
import { MultiAgentPayload } from '../shared/enums/multi-agent-payload';
import { MultiAgentSolution } from '../shared/enums/multi-agent-solution';

@Service()
export class Api {
    baseUrl = "http://127.0.0.1:8000";
    private http = inject(HttpClient);

    getSingleAgentCandidates(budget: number, job: string, agentType: AgentType): Observable<Candidate[]> {
        return this.http.get<Candidate[]>(`${this.baseUrl}/get-single-agent-candidates/${budget}/${job}/${agentType}`).pipe()
    }

    getMultiAgentCandidates(payload: MultiAgentPayload): Observable<MultiAgentSolution> {
        return this.http.post<MultiAgentSolution>(`${this.baseUrl}/get-multi-agent-candidates`, payload).pipe();
    }
}
