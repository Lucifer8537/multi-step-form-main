import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPlan } from './select-plan';

describe('SelectPlan', () => {
  let component: SelectPlan;
  let fixture: ComponentFixture<SelectPlan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectPlan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectPlan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
