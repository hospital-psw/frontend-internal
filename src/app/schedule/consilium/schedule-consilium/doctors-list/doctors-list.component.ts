import { ScheduleService } from './../../../service/schedule.service';
import { id } from 'date-fns/locale';
import { HttpErrorResponse } from '@angular/common/http';
import { Doctor } from 'src/app/schedule/interface/Doctor';
import { ToastrService } from 'ngx-toastr';
import { DoctorService } from './../../../../Statistics/statistics/Services/doctor.service';

import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { WorkHours } from 'src/app/schedule/interface/WorkHours';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss'],
})
export class DoctorsListComponent implements OnInit, OnChanges {
  doctors: Doctor[];
  selectedDoctors: number[] = [];
  disableList: boolean = false;
  @Input() doctorId: number;
  @Input() selectedSpecializations: number[];
  @Output() outputDoctors = new EventEmitter<number[]>();

  constructor(
    private doctorService: DoctorService,
    private toastrService: ToastrService,
    private scheduleService: ScheduleService
  ) { }

  ngOnInit(): void {
    this.getDoctorsWorkingHour();
  }

  getDoctorsWorkingHour(): void {
    this.scheduleService.getDoctorsWorkHours(this.doctorId).subscribe(
      (response: WorkHours) => {
        this.getDoctorsInSameShift(response.id);
      },
      (error: HttpErrorResponse) => {
        this.toastrService.error(error.message);
      }
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedSpecializations'].currentValue == undefined) {
      changes['selectedSpecializations'].currentValue = [];
    }
    if (changes['selectedSpecializations'].currentValue.length != 0) {
      this.disableList = true;
    } else {
      this.disableList = false;
    }
  }

  getDoctorsInSameShift(workingHourId: number): void {
    this.doctorService.getDoctorsInSameShift(workingHourId).subscribe(
      (response: Doctor[]) => {
        this.doctors = response;
      },
      (error: HttpErrorResponse) => {
        this.toastrService.error(error.message);
      }
    );
  }

  showData(): void {
    this.outputDoctors.emit(this.selectedDoctors);
  }
}
