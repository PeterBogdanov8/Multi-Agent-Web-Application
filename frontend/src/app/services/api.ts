import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { AgentType } from '../shared/enums/agent-type';
import { Observable } from 'rxjs';
import { Candidate } from '../shared/models/candidate';

@Service()
export class Api {
    baseUrl = "http://127.0.0.1:8000";
    private http = inject(HttpClient);

    getSingleAgentCandidates(budget: number, job: string, agentType: AgentType): Observable<Candidate[]> {
        return this.http.get<Candidate[]>(`${this.baseUrl}/get-single-agent-candidates/${budget}/${job}/${agentType}`).pipe()
    }
}
