import { AuthService } from 'src/app/common/auth/service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { MedicalTreatmentService } from './../../service/medical-treatment.service';
import { MedicalTreatment } from './../../interface/MedicalTreatment';
import { CreateDialogComponentComponent } from './../create-dialog-component/create-dialog-component.component';
import { Router } from '@angular/router';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JwtService } from 'src/app/common/auth/service/jwt.service';
import { TokenData } from 'src/app/login/interface/TokenData';

@Component({
  selector: 'app-component-button-bar',
  templateUrl: './component-button-bar.component.html',
  styleUrls: ['./component-button-bar.component.scss'],
})
export class ComponentButtonBarComponent implements OnInit {
  @Output() activeTreatments = new EventEmitter<MedicalTreatment[]>();
  @Output() inactiveTreatments = new EventEmitter<MedicalTreatment[]>();
  @Input() pageSizeFirst: number;
  @Input() pageNumberFirst: number;
  @Input() pageSizeSecond: number;
  @Input() pageNumberSecond: number;
  doctorId: number;
  role: string;
  isLoading: boolean;

  constructor(
    private dialog: MatDialog,
    private medicalTreatmentService: MedicalTreatmentService,
    private toastService: ToastrService,
    private authService: AuthService,
    private jwtService: JwtService
  ) {}

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.doctorId = user.id;
      this.role = (
        this.jwtService.decodeToken(user.token as string) as TokenData
      ).role;
    });
  }

  createTreatment(): void {
    const dialogRef = this.dialog
      .open(CreateDialogComponentComponent)
      .afterClosed()
      .subscribe((res) => {
        this.isLoading = true;
        this.getActiveTreatment();
        this.getInactiveTreatment();
        this.isLoading = false;
      });
  }

  getActiveTreatment(): void {
    if (this.role !== 'DOCTOR') {
      return;
    }
    this.medicalTreatmentService
      .getActive(this.doctorId, this.pageSizeFirst, this.pageNumberFirst)
      .subscribe(
        (response: MedicalTreatment[]) => {
          this.activeTreatments.emit(response);
        },
        (error: HttpErrorResponse) => {
          this.toastService.error(error.message);
        }
      );
  }

  getInactiveTreatment(): void {
    if (this.role !== 'DOCTOR') {
      return;
    }
    this.medicalTreatmentService
      .getInactive(this.doctorId, this.pageSizeSecond, this.pageNumberSecond)
      .subscribe(
        (response: MedicalTreatment[]) => {
          this.inactiveTreatments.emit(response);
        },
        (error: HttpErrorResponse) => {
          this.toastService.error(error.message);
        }
      );
  }
}
