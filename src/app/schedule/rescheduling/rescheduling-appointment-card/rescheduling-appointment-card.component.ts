import { ExaminationType } from './../../enum/ExaminationType.enum';
import { ScheduleService } from './../../service/schedule.service';
import { RecommendedDatesDTO } from './../../interface/RecommendedDatesDTO';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Appointment } from '../../interface/Appointment';
import { ReschedulingAppointmentDTO } from '../../interface/ReschedulingAppointmentDTO';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rescheduling-appointment-card',
  templateUrl: './rescheduling-appointment-card.component.html',
  styleUrls: ['./rescheduling-appointment-card.component.scss']
})
export class ReschedulingAppointmentCardComponent implements OnInit, OnChanges {

  @Input() appointment: Appointment;
  @Input() cardInfo : RecommendedDatesDTO;
  @Output() selectedDate: Date;

  examinationTypes: ExaminationType[];

  constructor(private scheduleService: ScheduleService, private toastrService: ToastrService) { }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
    this.examinationTypes = Object.values(ExaminationType);
  }

  createReschedulingAppointment() : ReschedulingAppointmentDTO {
    const dto = {
      id: this.appointment.id,
      date: this.cardInfo.date
    }
    return dto;
  }

  updateAppointment() : void {
    this.scheduleService.rescheduleAppointment(this.createReschedulingAppointment()).subscribe(
      (response: Appointment) => {
        alert("Selected appointment is successfully rescheduled!");
        //this.router.navigate(['']);
      },
      (error: HttpErrorResponse) => {
        this.toastrService.error(error.error)
      }
    );
  }

}
