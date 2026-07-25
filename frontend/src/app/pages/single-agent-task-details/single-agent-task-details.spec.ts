import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAgentTaskDetails } from './single-agent-task-details';

describe('SingleAgentTaskDetails', () => {
  let component: SingleAgentTaskDetails;
  let fixture: ComponentFixture<SingleAgentTaskDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleAgentTaskDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleAgentTaskDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
