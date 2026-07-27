import { Routes } from '@angular/router';
import { Agents } from './pages/agents/agents';
import { SingleAgent } from './pages/single-agent/single-agent';
import { MultiAgent } from './pages/multi-agent/multi-agent';

export const routes: Routes = [
    { path: "", redirectTo: "agents", pathMatch: "full" },
    { path: "agents", component: Agents },
    { path: "single-agent/:agentType", component: SingleAgent},
    { path: "multi-agent/:agentType", component: MultiAgent}
];
