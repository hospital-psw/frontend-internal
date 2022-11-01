import { RecommendedDatesDTO } from './../../interface/RecommendedDatesDTO';
import { RecommendedDTO } from './../../interface/RecommendedDTO';
import { ScheduleService } from '../../service/schedule.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpErrorResponse } from '@angular/common/http';
import { ReschedulingAppointmentDTO } from 'src/app/schedule/interface/ReschedulingAppointmentDTO';
import { Appointment } from 'src/app/schedule/interface/Appointment';
import { ExaminationType } from 'src/app/schedule/enum/ExaminationType.enum';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-rescheduling-appointment-table',
  templateUrl: './rescheduling-appointment-table.component.html',
  styleUrls: ['./rescheduling-appointment-table.component.scss'],
})
export class ReschedulingAppointmentTableComponent implements OnInit {
  //podatak koji se dobija iz kartice (child-a)
  appointment: Appointment;
  @Input() recommendedDates: RecommendedDatesDTO[] = null as any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.appointment = this.route.snapshot.data['appointment'];
  }
}
