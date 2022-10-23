import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReschedulingAppointmentFormComponent } from './rescheduling-appointment-form.component';

describe('ReschedulingAppointmentFormComponent', () => {
  let component: ReschedulingAppointmentFormComponent;
  let fixture: ComponentFixture<ReschedulingAppointmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReschedulingAppointmentFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReschedulingAppointmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
