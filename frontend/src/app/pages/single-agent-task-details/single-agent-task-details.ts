import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AgentType } from '../../shared/enums/agent-type';

@Component({
  selector: 'app-single-agent-task-details',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './single-agent-task-details.html',
  styleUrl: './single-agent-task-details.scss',
})
export class SingleAgentTaskDetails {
  @Input() agentType!: AgentType;
  private formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    role: new FormControl('', Validators.required),
    budget: new FormControl('', Validators.required)
  });

  onSubmit() {
  }
}
