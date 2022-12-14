import { WorkHours } from './../../../interface/WorkHours';
import { ScheduleService } from './../../../service/schedule.service';
import { ToastrService } from 'ngx-toastr';
import { DoctorService } from './../../../../Statistics/statistics/Services/doctor.service';
import { Specialization } from './../../../enum/Specialization.enum';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-specializations-list',
  templateUrl: './specializations-list.component.html',
  styleUrls: ['./specializations-list.component.scss'],
})
export class SpecializationsListComponent implements OnInit, OnChanges {
  specializations: string[] = [];
  selectedSpecializations: string[] = [];
  selectedSpecializationsNumbers: number[] = [];
  disableList: boolean = false;
  @Input() doctorId: number = null as any;
  @Input() selectedDoctors: number[];
  @Output() outputSpecializations = new EventEmitter<number[]>();

  constructor(
    private doctorService: DoctorService,
    private toastrService: ToastrService,
    private scheduleService: ScheduleService
  ) {}

  ngOnInit(): void {
    this.getDoctorsWorkingHour();
  }

  getDoctorsWorkingHour(): void {
    this.scheduleService.getDoctorsWorkHours(this.doctorId).subscribe(
      (response: WorkHours) => {
        this.getSpecializationsOfDoctorsInSameShift(response.id);
      },
      (error: HttpErrorResponse) => {
        this.toastrService.error(error.message);
      }
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedDoctors'].currentValue == undefined) {
      changes['selectedDoctors'].currentValue = [];
    }
    if (changes['selectedDoctors'].currentValue.length != 0) {
      this.disableList = true;
    } else {
      this.disableList = false;
    }
  }

  getSpecializationsOfDoctorsInSameShift(workHourId: number): void {
    this.doctorService
      .getSpecializationsOfDoctorsInSameShift(workHourId)
      .subscribe(
        (response: number[]) => {
          response.forEach((specNum) =>
            this.specializations.push(Specialization[specNum])
          );
        },
        (error: HttpErrorResponse) => {
          this.toastrService.error(error.message);
        }
      );
  }

  showData(): void {
    this.selectedSpecializationsNumbers = [];
    let allSpecializations = Object.values(Specialization);
    this.selectedSpecializations.forEach((spec) =>
      this.selectedSpecializationsNumbers.push(allSpecializations.indexOf(spec))
    );
    this.outputSpecializations.emit(this.selectedSpecializationsNumbers);
  }
}
