import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationStepperComponent } from './examination-stepper.component';

describe('ExaminationStepperComponent', () => {
  let component: ExaminationStepperComponent;
  let fixture: ComponentFixture<ExaminationStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExaminationStepperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExaminationStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
