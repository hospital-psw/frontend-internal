import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReschedulingAppointmentCardComponent } from './rescheduling-appointment-card.component';

describe('ReschedulingAppointmentCardComponent', () => {
  let component: ReschedulingAppointmentCardComponent;
  let fixture: ComponentFixture<ReschedulingAppointmentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReschedulingAppointmentCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReschedulingAppointmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
