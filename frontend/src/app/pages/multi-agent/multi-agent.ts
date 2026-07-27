import { MultiAgentPayload } from './../../shared/enums/multi-agent-payload';
import { Task } from './../../shared/enums/task';
import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { MultiAgentType } from '../../shared/enums/multi-agent-type';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInput } from "@angular/material/input";
import { MatIconModule } from '@angular/material/icon';
import { Api } from '../../services/api';
import { MultiAgentSolution } from '../../shared/enums/multi-agent-solution';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-multi-agent',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CdkAccordionModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInput,
    MatIconModule,
    MatTableModule
],
  templateUrl: './multi-agent.html',
  styleUrl: './multi-agent.scss',
})
export class MultiAgent implements OnInit {
  @Input() agentType!: MultiAgentType;
  formBuilder = inject(FormBuilder);
  api = inject(Api);
  private cdr = inject(ChangeDetectorRef);
  tasksArray = new FormArray<FormGroup>([]);
  multiAgentSolutions!: MultiAgentSolution[];
  hasLoadedSolution = false;
  tableCols = ["id", "gender", "education", "job",  "experience", "salary"];

  ngOnInit(): void {
    this.addTask();
  }

  createTaskFormGroup(): FormGroup {
    return this.formBuilder.group({
      role: new FormControl('', Validators.required),
      budget: new FormControl<number| undefined>(undefined, Validators.required)
    });
  }

  removeTask(index: number) {
    this.tasksArray.removeAt(index);
  }

  addTask() {
    this.tasksArray.push(this.createTaskFormGroup());
  }

  submitTasks() {
    let tasks: Task[] = [];
    this.tasksArray.controls.forEach(control => {
      const task: Task = {
        job: control.get("role")?.value,
        budget: control.get("budget")?.value
      } as Task;
      tasks.push(task);
    });
    const payload = {
      tasks,
      mult_agent_type: this.agentType
    } as MultiAgentPayload;
    this.api.getMultiAgentCandidates(payload).subscribe(multiAgentSolutions => {
      this.multiAgentSolutions = multiAgentSolutions
      this.hasLoadedSolution = true;
      this.cdr.detectChanges();
    });
  }
}
