import { Component, inject, Input, OnInit } from '@angular/core';
import { MultiAgentType } from '../../shared/enums/multi-agent-type';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInput } from "@angular/material/input";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-multi-agent',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInput,
    MatIconModule
],
  templateUrl: './multi-agent.html',
  styleUrl: './multi-agent.scss',
})
export class MultiAgent implements OnInit {
  @Input() agentType!: MultiAgentType;
  formBuilder = inject(FormBuilder);
  tasksArray = new FormArray<FormGroup>([]);

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

  }
}
