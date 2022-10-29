import { RecommendedDTO } from './../../interface/RecommendedDTO';
import { ScheduleService } from '../../service/schedule.service';
import { Component, Input, OnInit, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
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
  styleUrls: ['./rescheduling-appointment-table.component.scss']
})
export class ReschedulingAppointmentTableComponent implements OnInit, OnChanges {

  displayedColumns: string[] = ['date', 'time'];
  dataSource! : MatTableDataSource<Date>;
  selectedDateTime: Date;
  examinationTypes: ExaminationType[];
  appointment: Appointment;
  @Input('recommendedDatesForTable') recommendedDates: Date[];

  pageSize: number = 10;
  pageNumber: number = 0;
  @ViewChild('datesPaginator') paginator: MatPaginator;

  constructor(private appointmentService: ScheduleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Date>();

    this.appointment = this.route.snapshot.data["appointment"];
    this.examinationTypes = Object.values(ExaminationType);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<Date>(this.recommendedDates);
    this.dataSource.paginator = this.paginator;
    this.selectedDateTime = null as any;
  }

  onSelect(dateTime: Date) : void {
    this.selectedDateTime = dateTime;
  }

  createReschedulingAppointment() : ReschedulingAppointmentDTO {
    const dto = {
      id: this.appointment.id,
      date: this.selectedDateTime == null ? this.appointment.date : this.selectedDateTime,
      duration: this.appointment.duration,
      examType: this.examinationTypes.indexOf(this.appointment.examType),
      roomId: this.appointment.room.id,
      patientId: this.appointment.patient.id
    }
    return dto;
  }

  updateAppointment() : void {
    this.appointmentService.rescheduleAppointment(this.createReschedulingAppointment()).subscribe(
      (response: Appointment) => {
        alert("Selected appointment is successfully rescheduled!");
        //this.router.navigate(['']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
