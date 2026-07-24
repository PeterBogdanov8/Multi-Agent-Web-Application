import { Routes } from '@angular/router';
import { Agents } from './pages/agents/agents';

export const routes: Routes = [
    { path: "", redirectTo: "agents", pathMatch: "full" },
    { path: "agents", component: Agents }
];
