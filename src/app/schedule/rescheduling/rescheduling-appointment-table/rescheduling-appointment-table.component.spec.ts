import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReschedulingAppointmentTableComponent } from './rescheduling-appointment-table.component';

describe('ReschedulingAppointmentTableComponent', () => {
  let component: ReschedulingAppointmentTableComponent;
  let fixture: ComponentFixture<ReschedulingAppointmentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReschedulingAppointmentTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReschedulingAppointmentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
