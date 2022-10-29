import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReschedulingAppointmentComponent } from './rescheduling-appointment.component';

describe('ReschedulingAppointmentComponent', () => {
  let component: ReschedulingAppointmentComponent;
  let fixture: ComponentFixture<ReschedulingAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReschedulingAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReschedulingAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
