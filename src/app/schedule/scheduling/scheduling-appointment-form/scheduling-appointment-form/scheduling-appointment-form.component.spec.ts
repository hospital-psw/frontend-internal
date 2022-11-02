import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingAppointmentFormComponent } from './scheduling-appointment-form.component';

describe('SchedulingAppointmentFormComponent', () => {
  let component: SchedulingAppointmentFormComponent;
  let fixture: ComponentFixture<SchedulingAppointmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchedulingAppointmentFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SchedulingAppointmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
