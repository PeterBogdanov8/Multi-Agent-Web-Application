import { Routes } from '@angular/router';
import { Agents } from './pages/agents/agents';
import { SingleAgent } from './pages/single-agent/single-agent';

export const routes: Routes = [
    { path: "", redirectTo: "agents", pathMatch: "full" },
    { path: "agents", component: Agents },
    { path: "single-agent/:agentType", component: SingleAgent}
];
