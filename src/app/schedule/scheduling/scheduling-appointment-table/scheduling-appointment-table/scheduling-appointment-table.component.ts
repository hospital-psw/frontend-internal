import { Component, OnInit, Input } from '@angular/core';
import { Appointment } from 'src/app/schedule/interface/Appointment';
import { RecommendedDatesDTO } from 'src/app/schedule/interface/RecommendedDatesDTO';
import { ScheduleAppointmentDTO } from 'src/app/schedule/interface/ScheduleAppointmentDTO';

@Component({
  selector: 'app-scheduling-appointment-table',
  templateUrl: './scheduling-appointment-table.component.html',
  styleUrls: ['./scheduling-appointment-table.component.scss'],
})
export class SchedulingAppointmentTableComponent implements OnInit {
  @Input() appointmentData: ScheduleAppointmentDTO;
  @Input() recommendedDates: RecommendedDatesDTO[] = null as any;

  date: Date;
  appointment: Appointment;

  constructor() {}

  ngOnInit(): void {}

  test() {}
}
