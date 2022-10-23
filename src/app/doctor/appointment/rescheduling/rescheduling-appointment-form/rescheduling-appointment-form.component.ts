import { Appointment } from './../../../interface/Appointment';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExaminationType } from '../../../enum/ExaminationType.enum';
import { ReschedulingAppointmentDTO } from '../../../interface/ReschedulingAppointmentDTO';
import { Room } from '../../../interface/Room';
import { AppointmentService } from '../../../service/appointment.service';

@Component({
  selector: 'app-rescheduling-appointment-form',
  templateUrl: './rescheduling-appointment-form.component.html',
  styleUrls: ['./rescheduling-appointment-form.component.scss']
})
export class ReschedulingAppointmentFormComponent implements OnInit {

  reschedulingAppointment: Appointment;
  rooms: Room[];
  examinationTypes: ExaminationType[];
  num: any;

  constructor(private appointmentService: AppointmentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reschedulingAppointment = this.route.snapshot.data["appointment"];
    this.examinationTypes = Object.values(ExaminationType);
    this.num = this.reschedulingAppointment.examType;
    this.reschedulingAppointment.examType = this.examinationTypes[this.num];
    console.log(this.reschedulingAppointment.examType, this.reschedulingAppointment.date, this.reschedulingAppointment.duration, this.reschedulingAppointment.id, this.reschedulingAppointment.room)
  }

  updateAppointment() : void {
    console.log(this.examinationTypes.indexOf(this.reschedulingAppointment.examType))
  }

}
