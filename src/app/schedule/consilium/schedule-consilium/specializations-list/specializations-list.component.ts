import { ToastrService } from 'ngx-toastr';
import { DoctorService } from './../../../../Statistics/statistics/Services/doctor.service';
import { Specialization } from './../../../enum/Specialization.enum';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-specializations-list',
  templateUrl: './specializations-list.component.html',
  styleUrls: ['./specializations-list.component.scss'],
})
export class SpecializationsListComponent implements OnInit {
  specializations: string[] = [];
  selectedSpecializations: string[];
  selectedSpecializationsNumbers: number[];
  constructor(
    private doctorService: DoctorService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getSpecializationsOfDoctorsInSameShift();
  }

  getSpecializationsOfDoctorsInSameShift(): void {
    //PROMENITI 8
    this.doctorService.getSpecializationsOfDoctorsInSameShift(8).subscribe(
      (response: number[]) => {
        response.forEach((specNum) =>
          this.specializations.push(Specialization[specNum])
        );
        console.log(this.specializations);
      },
      (error: HttpErrorResponse) => {
        this.toastrService.error(error.message);
      }
    );
  }

  showData(): void {
    console.log(this.selectedSpecializations);
  }
}
