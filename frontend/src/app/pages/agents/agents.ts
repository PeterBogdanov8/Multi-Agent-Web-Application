import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { AgentType } from '../../shared/enums/agent-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agents',
  imports: [
    MatCardModule,
    MatGridListModule,
    MatIconModule
  ],
  templateUrl: './agents.html',
  styleUrl: './agents.scss',
})
export class Agents implements OnInit {
  cards = [
    { 
      title: "Search Agent", 
      subtitle: "single agent", 
      description: "A search algorithm is used to select candidates by comparing the candidate's expected salary with the employer's salary budget. The algorithm checks whether the candidate's expected salary is less than or equal to the amount the employer is willing to pay. Candidates who meet this requirement have a high change of being selected, while those whose salary expectations are higher than the employer's budget are not considered.",
      value: AgentType.SearchAgentType
    },
    { 
      title: "Simulated Annealing Agent", 
      subtitle: "single agent", 
      description: "A simulated annealing algorithm is used to select the best candidates from a group of possible candidates. It starts by choosing a candidate and then looks for better options by trying different possibilities. Sometimes, it also accepts a less suitable candidate to avoid getting stuck with a poor choice too early. As the process continues, it becomes more focused on selecting the best candidates.",
      value: AgentType.SimulatedAnnealingAgentType
    },
    { 
      title: "Genetic Agent", 
      subtitle: "single agent", 
      description: "A genetic algorithm is used to select the best candidates by copying the idea of natural evolution. It starts with a group of possible candidates and checks how well each one meets the required conditions. The best candidates are chosen and combined to create new candidates. Small random changes may also be made to improve the results. This process is repeated several times until the algorithm finds the most suitable candidates.",
      value: AgentType.GeneticAgentType
    },
    { 
      title: "Dynamic Programming Agent", 
      subtitle: "single agent", 
      description: "A dynamic programming algorithm is used to select the best candidates by finding all possible solutions in a systematic way. After considering all possible solutions, the algorithm compares them and chooses the best one based on the given requirements.",
      value: AgentType.DynamicProgrammingAgentType
    },
  ];
  numCols = 1;

  private breakpointObserver = inject(BreakpointObserver);
  private router = inject(Router)

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet,
      Breakpoints.Web
    ]).subscribe(_ => {
      if (this.breakpointObserver.isMatched(Breakpoints.Handset)) {
        this.numCols = 1;
      } else if (this.breakpointObserver.isMatched(Breakpoints.Tablet)) {
        this.numCols = 2;
      } else if (this.breakpointObserver.isMatched(Breakpoints.Web)) {
        this.numCols = 2;
      }
    })
  }

  onAgentClick(agentType: AgentType) {
    this.router.navigate(["/single-agent-task-details", agentType])
  }
}