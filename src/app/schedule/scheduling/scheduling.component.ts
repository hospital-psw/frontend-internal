import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/common/auth/service/auth.service';
import { RecommendedDatesDTO } from '../interface/RecommendedDatesDTO';
import { ScheduleAppointmentDTO } from '../interface/ScheduleAppointmentDTO';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss'],
})
export class SchedulingComponent implements OnInit {
  redirectAppointment: ScheduleAppointmentDTO;
  recommendedDates: RecommendedDatesDTO[];
  private userSub: Subscription;
  doctorId: number;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.doctorId = user.id;
    });
  }

  acceptData(data: ScheduleAppointmentDTO) {
    this.redirectAppointment = data;
    console.log(data);
  }

  acceptDates(value: RecommendedDatesDTO[]) {
    this.recommendedDates = value;
  }
}
