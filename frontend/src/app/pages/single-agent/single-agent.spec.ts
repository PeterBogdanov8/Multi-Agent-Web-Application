import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAgent } from './single-agent';

describe('SingleAgent', () => {
  let component: SingleAgent;
  let fixture: ComponentFixture<SingleAgent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleAgent],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleAgent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
