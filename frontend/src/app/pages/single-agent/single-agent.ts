import { ChangeDetectorRef, Component, inject, Input } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AgentType } from '../../shared/enums/agent-type';
import { Api } from '../../services/api';
import { Candidate } from '../../shared/models/candidate';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule
  ],
  templateUrl: './single-agent.html',
  styleUrl: './single-agent.scss',
})
export class SingleAgent {
  @Input() agentType!: AgentType;
  private formBuilder = inject(FormBuilder);
  private api = inject(Api);
  private cdr = inject(ChangeDetectorRef);
  form = this.formBuilder.group({
    role: new FormControl('', Validators.required),
    budget: new FormControl<number| undefined>(undefined, Validators.required)
  });
  candidates: Candidate[] = [];
  hasLoadedCandidates = false;
  tableCols = ["id", "gender", "education", "job",  "experience", "salary"];

  onSubmit() {
    const role = this.form.get("role")?.value ?? "";
    const budget = this.form.get("budget")?.value ?? 0;
    this.api.getSingleAgentCandidates(budget, role, this.agentType).subscribe(candidates => {
      this.candidates = candidates;
      this.hasLoadedCandidates = true;
      this.cdr.detectChanges();
    });
  }
}
