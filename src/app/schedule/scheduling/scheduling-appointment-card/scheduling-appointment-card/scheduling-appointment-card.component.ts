import { HttpErrorResponse } from '@angular/common/http';
import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Appointment } from 'src/app/schedule/interface/Appointment';
import { RecommendedDatesDTO } from 'src/app/schedule/interface/RecommendedDatesDTO';
import { ScheduleAppointmentDTO } from 'src/app/schedule/interface/ScheduleAppointmentDTO';
import { ScheduleService } from 'src/app/schedule/service/schedule.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-scheduling-appointment-card',
  templateUrl: './scheduling-appointment-card.component.html',
  styleUrls: ['./scheduling-appointment-card.component.scss'],
})
export class SchedulingAppointmentCardComponent implements OnInit {
  @Input() appointmentData: ScheduleAppointmentDTO;
  @Input() cardInfo: RecommendedDatesDTO;
  isFinished: boolean;
  refresh: Subject<any> = new Subject();

  constructor(
    private scheduleService: ScheduleService,
    private toaster: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isFinished = true;
  }

  createSchedulingAppointment(): void {
    this.appointmentData.date = this.cardInfo.date;
  }

  createAppointment(): void {
    this.createSchedulingAppointment();
    this.isFinished = false;
    this.scheduleService.scheduleAppointment(this.appointmentData).subscribe(
      (response: Appointment) => {
        this.isFinished = true;
        this.toaster.success(
          'Appointment succesfully scheduled on date ' + response.date
        );
        this.router.navigate(['/app/appointments']);
      },
      (error: HttpErrorResponse) => {
        this.isFinished = true;
        this.toaster.error(error.error);
      }
    );
  }
}
