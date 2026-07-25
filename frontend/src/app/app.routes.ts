import { Routes } from '@angular/router';
import { Agents } from './pages/agents/agents';
import { SingleAgentTaskDetails } from './pages/single-agent-task-details/single-agent-task-details';

export const routes: Routes = [
    { path: "", redirectTo: "agents", pathMatch: "full" },
    { path: "agents", component: Agents },
    { path: "single-agent-task-details/:agentType", component: SingleAgentTaskDetails}
];
