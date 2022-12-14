import { Component, DoCheck, OnInit } from '@angular/core';
import { BloodType } from '../../interface/BloodType.enum';
import { CreateExpenditureDTO } from '../../interface/CreateExpenditureDTO';
import { BloodExpenditureService } from '../../service/blood-expenditure.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/common/auth/service/auth.service';

@Component({
  selector: 'app-blood-expenditure',
  templateUrl: './blood-expenditure.component.html',
  styleUrls: ['./blood-expenditure.component.scss'],
})
export class BloodExpenditureComponent implements OnInit, DoCheck {
  constructor(
    private bloodExpenditureService: BloodExpenditureService,
    private toastrService: ToastrService,
    private router: Router,
    private authService: AuthService
  ) {}

  disabled = true;
  reason: string;
  bloodTypes = Object.values(BloodType);
  createExpenditureDTO: CreateExpenditureDTO;
  amount: number;
  bloodType: BloodType;
  bloodTypeString: number;
  doctorId: number;

  createExpenditure(): void {
    this.createExpenditureDTO.reason = this.reason;
    this.createExpenditureDTO.amount = this.amount;

    this.bloodTypeString = this.bloodTypes.indexOf(this.bloodType);
    this.createExpenditureDTO.bloodType = this.bloodTypeString;
    this.createExpenditureDTO.doctorId = this.doctorId;

    this.bloodExpenditureService
      .createBloodExpenditure(this.createExpenditureDTO)
      .subscribe(
        (response: CreateExpenditureDTO) => {
          this.toastrService.success('Created expenditure');
          this.router.navigateByUrl('/app/blood-request');
        },
        (error: HttpErrorResponse) => {
          this.toastrService.error(error.error);
        }
      );
  }

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.doctorId = user.id;
    });
    this.createExpenditureDTO = {
      doctorId: this.doctorId,
      reason: '',
      amount: 20,
      bloodType: 0,
    };
  }

  ngDoCheck(): void {
    if (
      this.amount != 0 &&
      this.reason != null &&
      this.reason != '' &&
      this.bloodType != null
    )
      this.disabled = false;
  }
}
