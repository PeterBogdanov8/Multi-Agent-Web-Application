# Multi-Agent Web Application
This project is a multi-agent system that optimally assigns employees to workplace roles while respecting role budgets and preventing duplicate assignments. It solves the problem by decomposing it into parallel knapsack optimization tasks, combining dynamic programming, genetic algorithms simulated annealing, search, and backtracking to find high-quality team allocations.

## Tech Stack
- **Frontend:** Angular, Angular Material, TypeScript, HTML, SCSS
- **Backend:** FastAPI, Python
- **Data**: JSON

## Project Structure
- `/frontend` - Frontend Angular application (see [Frontend README](./frontend/README.md) for local setup)
- `/backend` - Backend FastAPI API (see [Backend README](./backend/README.md) for local setup)

## Quick Start
1. Clone the repository.
2. Follow the setup guides in the `/frontend` and `backend` folders.

## CI/CD Pipeline Architecture
This repository implements an automation workflow using **GitHub Actions**. The pipeline is designed around a **Modular Gateway Architecture**

### Workflow Overview
```mermaid
graph TD
    %% Node Definitions
    Trigger([Push / Pull Request]) --> Gateway{{"Integration Gateway <br/> (Path Filtering)"}}

    subgraph Frontend_Pipeline [Frontend Integration]
        Frontend_Workspace[[Angular Workspace]]
        Frontend_Lint(Lint)
        Frontend_Build(Build)
        Frontend_Workspace --> Frontend_Lint 
        Frontend_Workspace --> Frontend_Build
    end

    subgraph Backend_Pipeline [Backend Integration]
        Backend_Workspace[[FastAPI Workspace]]
        Backend_Lint(Lint)
        Backend_Build(Build)
        Backend_Workspace --> Backend_Lint 
        Backend_Workspace --> Backend_Build
    end

    %% Path Based Routing
    Gateway --> |./frontend| Frontend_Workspace
    Gateway --> |./backend| Backend_Workspace

    %% Deployment
    Frontend_Lint --> Merge([Merge to Main])
    Frontend_Build --> Merge
    Backend_Lint --> Merge
    Backend_Build --> Merge

    Merge --> Deployment_Pipeline{{Deployment Pipeline}} --> Deploy[(GitHub Container Registry <br/> ghcr.io)]
```