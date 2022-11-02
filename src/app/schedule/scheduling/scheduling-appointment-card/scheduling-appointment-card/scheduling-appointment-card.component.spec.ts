import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingAppointmentCardComponent } from './scheduling-appointment-card.component';

describe('SchedulingAppointmentCardComponent', () => {
  let component: SchedulingAppointmentCardComponent;
  let fixture: ComponentFixture<SchedulingAppointmentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchedulingAppointmentCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SchedulingAppointmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
