import { HttpErrorResponse } from '@angular/common/http';
import { Doctor } from 'src/app/schedule/interface/Doctor';
import { ToastrService } from 'ngx-toastr';
import { DoctorService } from './../../../../Statistics/statistics/Services/doctor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss'],
})
export class DoctorsListComponent implements OnInit {
  doctors: Doctor[];
  selectedDoctors: number[];

  constructor(
    private doctorService: DoctorService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getDoctorsInSameShift();
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
    console.log(this.selectedDoctors);
  }
}
