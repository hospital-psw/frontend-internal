import { RecommendedDTO } from './../../interface/RecommendedDTO';
import { ReschedulingAppointmentDTO } from './../../interface/ReschedulingAppointmentDTO';
import { Appointment } from './../../interface/Appointment';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExaminationType } from '../../enum/ExaminationType.enum';
import { Room } from '../../interface/Room';
import { ScheduleService } from '../../service/schedule.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-rescheduling-appointment-form',
  templateUrl: './rescheduling-appointment-form.component.html',
  styleUrls: ['./rescheduling-appointment-form.component.scss']
})
export class ReschedulingAppointmentFormComponent implements OnInit {

  @Output() outputDates = new EventEmitter<Date[]>();
  appointment: Appointment;
  rooms: Room[];
  recommendedDto : RecommendedDTO;
  examinationTypes: ExaminationType[];
  num: any;
  recommendedDates: Date[];

  constructor(private appointmentService: ScheduleService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.appointment = this.route.snapshot.data["appointment"];
    this.examinationTypes = Object.values(ExaminationType);

    this.recommendedDto = {
      patientId: this.appointment.patient.id,
      date: null as any
    }

    this.num = this.appointment.examType;
    this.appointment.examType = this.examinationTypes[this.num];
  }

  onClickShowRecommended() : void {
    if(this.recommendedDto.date == null) {
      alert("Please, choose both dates.");
      return;
    }
    this.getRecommendedAppointments();
  }

  getRecommendedAppointments() : void {
    this.appointmentService.getAllRecommended(this.recommendedDto).subscribe(
      (response: Date[]) => {
        this.outputDates.emit(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
