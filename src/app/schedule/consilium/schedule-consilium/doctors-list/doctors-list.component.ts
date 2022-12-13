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

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss'],
})
export class DoctorsListComponent implements OnInit, OnChanges {
  doctors: Doctor[];
  selectedDoctors: number[] = [];
  disableList: boolean = false;
  @Input() selectedSpecializations: number[];
  @Output() outputDoctors = new EventEmitter<number[]>();

  constructor(
    private doctorService: DoctorService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getDoctorsInSameShift();
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

  getDoctorsInSameShift(): void {
    //PROMENITI 8
    this.doctorService.getDoctorsInSameShift(8).subscribe(
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
