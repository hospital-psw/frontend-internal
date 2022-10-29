import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReschedulingAppointmentHeaderComponent } from './rescheduling-appointment-header.component';

describe('ReschedulingAppointmentHeaderComponent', () => {
  let component: ReschedulingAppointmentHeaderComponent;
  let fixture: ComponentFixture<ReschedulingAppointmentHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReschedulingAppointmentHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReschedulingAppointmentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
