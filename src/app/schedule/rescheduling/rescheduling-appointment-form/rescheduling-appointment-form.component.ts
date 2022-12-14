import { ToastrService } from 'ngx-toastr';
import { RecommendedDatesDTO } from './../../interface/RecommendedDatesDTO';
import { RecommendedDTO } from './../../interface/RecommendedDTO';
import { ReschedulingAppointmentDTO } from './../../interface/ReschedulingAppointmentDTO';
import { Appointment } from './../../interface/Appointment';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExaminationType } from '../../enum/ExaminationType.enum';
import { IRoom } from '../../../Manager/Model/Room';
import { ScheduleService } from '../../service/schedule.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Output, EventEmitter, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-rescheduling-appointment-form',
  templateUrl: './rescheduling-appointment-form.component.html',
  styleUrls: ['./rescheduling-appointment-form.component.scss'],
})
export class ReschedulingAppointmentFormComponent implements OnInit {
  @Output() outputDates = new EventEmitter<RecommendedDatesDTO[]>();
  @Input() doctorId: number;
  appointment: Appointment;
  rooms: IRoom[];
  recommendedDto: RecommendedDTO;
  examinationTypes: ExaminationType[];
  num: any;
  recommendedDates: Date[];

  constructor(
    private appointmentService: ScheduleService,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.appointment = this.route.snapshot.data['appointment'];
    this.examinationTypes = Object.values(ExaminationType);

    this.recommendedDto = {
      patientId: this.appointment.patient.id,
      doctorId: this.doctorId,
      date: null as any,
    };

    this.num = this.appointment.examType;
    this.appointment.examType = this.examinationTypes[this.num] as any;
    this.appointment.date = this.datePipe.transform(
      new Date(this.appointment.date),
      'dd.MM.yyyy. HH:mm'
    ) as any;
  }

  onClickShowRecommended(): void {
    if (this.recommendedDto.date == null) {
      this.toastrService.warning('Please, specify a date!');
      return;
    }
    this.getRecommendedAppointments();
  }

  getRecommendedAppointments(): void {
    let date = this.recommendedDto.date;
    this.recommendedDto.date = new Date(
      date?.getFullYear()!,
      date?.getMonth()!,
      date?.getDate(),
      date?.getHours()! + 5
    );
    this.appointmentService.getAllRecommended(this.recommendedDto).subscribe(
      (response: RecommendedDatesDTO[]) => {
        this.outputDates.emit(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
