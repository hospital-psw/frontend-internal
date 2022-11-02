import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingAppointmentTableComponent } from './scheduling-appointment-table.component';

describe('SchedulingAppointmentTableComponent', () => {
  let component: SchedulingAppointmentTableComponent;
  let fixture: ComponentFixture<SchedulingAppointmentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchedulingAppointmentTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SchedulingAppointmentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
