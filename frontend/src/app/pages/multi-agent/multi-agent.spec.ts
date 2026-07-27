import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiAgent } from './multi-agent';

describe('MultiAgent', () => {
  let component: MultiAgent;
  let fixture: ComponentFixture<MultiAgent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiAgent],
    }).compileComponents();

    fixture = TestBed.createComponent(MultiAgent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
