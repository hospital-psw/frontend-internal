import { RecommendedDatesDTO } from './../../interface/RecommendedDatesDTO';
import { ScheduleService } from './../../service/schedule.service';
import { RecommendedDTO } from './../../interface/RecommendedDTO';
import { ExaminationType } from '../../enum/ExaminationType.enum';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ReschedulingAppointmentDTO } from './../../interface/ReschedulingAppointmentDTO';
import { Component, OnInit } from '@angular/core';
import { IRoom } from '../../../Manager/Model/Room';

@Component({
  selector: 'app-rescheduling-appointment',
  templateUrl: './rescheduling-appointment.component.html',
  styleUrls: ['./rescheduling-appointment.component.scss']
})
export class ReschedulingAppointmentComponent implements OnInit {

  recommendedDatesFromParent: RecommendedDatesDTO[];

  constructor(private appointmentService: ScheduleService, private router: Router) { }

  ngOnInit(): void {
  }

  storeFromChildForm(recommendedDates: RecommendedDatesDTO[]) {
    this.recommendedDatesFromParent = recommendedDates;
  }
}
