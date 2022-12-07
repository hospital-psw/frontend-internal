import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ExaminationType } from 'src/app/schedule/enum/ExaminationType.enum';
import { RecommendedDatesDTO } from 'src/app/schedule/interface/RecommendedDatesDTO';
import { RecommendedDTO } from 'src/app/schedule/interface/RecommendedDTO';
import { ScheduleAppointmentDTO } from 'src/app/schedule/interface/ScheduleAppointmentDTO';
import { PatientTableComponent } from 'src/app/schedule/patients/patient-table/patient-table.component';
import { PatientService } from 'src/app/schedule/service/patient.service';
import { ScheduleService } from 'src/app/schedule/service/schedule.service';
import { Patient } from './../../../interface/Patient';

@Component({
  selector: 'app-scheduling-appointment-form',
  templateUrl: './scheduling-appointment-form.component.html',
  styleUrls: ['./scheduling-appointment-form.component.scss'],
})
export class SchedulingAppointmentFormComponent implements OnInit {
  duration = 30;
  selectedDate: Date;
  patients: Patient[];
  examinationType: string;
  selectedPatient: number;
  scheduleAppointment: ScheduleAppointmentDTO;
  minDate: Date;

  recommendedDates: Date[];

  recommendedDto: RecommendedDTO;

  @Output() scheduleInfoEvent = new EventEmitter<ScheduleAppointmentDTO>();
  @Output() outputDates = new EventEmitter<RecommendedDatesDTO[]>();

  constructor(
    private patientService: PatientService,
    private toastService: ToastrService,
    private appointmentService: ScheduleService
  ) {
    this.minDate = new Date();
  }

  ngOnInit(): void {
    this.patientService.getAllPatients().subscribe(
      (response: Patient[]) => {
        this.patients = response;
      },
      (error: HttpErrorResponse) => {
        this.toastService.error('Error ocurred while getting patients data');
      }
    );
    this.recommendedDto = {
      patientId: -1,
      doctorId: 8,
      date: null as any,
    };
    this.scheduleAppointment = {
      patientId: -1,
      doctorId: 8,
      date: null as any,
      examType: 1,
    };
  }

  test() {
    console.log(this.duration);
    console.log(this.selectedDate);
  }

  onClickShowRecommended(): void {
    if (this.recommendedDto.date == null) {
      this.toastService.warning('Please, specify a date...');
      return;
    }
    this.getRecommendedAppointments();
  }

  getRecommendedAppointments(): void {
    let date = this.recommendedDto.date;
    this.scheduleAppointment.patientId = this.recommendedDto.patientId;
    this.scheduleAppointment.doctorId = 8;
    this.scheduleAppointment.examType = parseInt(this.examinationType);
    this.recommendedDto.date = new Date(
      date?.getFullYear()!,
      date?.getMonth()!,
      date?.getDate(),
      date?.getHours()! + 5
    );
    this.appointmentService.getAllRecommended(this.recommendedDto).subscribe(
      (response: RecommendedDatesDTO[]) => {
        this.outputDates.emit(response);
        this.scheduleInfoEvent.emit(this.scheduleAppointment);
      },
      (error: HttpErrorResponse) => {
        this.toastService.error(error.error);
      }
    );
  }
}
