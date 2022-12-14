import { AuthService } from 'src/app/common/auth/service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { MedicalTreatmentService } from './../../service/medical-treatment.service';
import { MedicalTreatment } from './../../interface/MedicalTreatment';
import { CreateDialogComponentComponent } from './../create-dialog-component/create-dialog-component.component';
import { Router } from '@angular/router';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(
    private dialog: MatDialog,
    private medicalTreatmentService: MedicalTreatmentService,
    private toastService: ToastrService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.doctorId = user.id;
    });
  }

  createTreatment(): void {
    const dialogRef = this.dialog
      .open(CreateDialogComponentComponent)
      .afterClosed()
      .subscribe((res) => {
        this.getActiveTreatment();
        this.getInactiveTreatment();
      });
  }

  getActiveTreatment(): void {
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
