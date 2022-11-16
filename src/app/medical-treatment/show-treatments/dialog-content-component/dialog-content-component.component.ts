import { MedicalTreatment } from './../../interface/MedicalTreatment';
import { MedicalTreatmentService } from './../../service/medical-treatment.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Patient } from './../../../schedule/interface/Patient';
import { IRoom } from 'src/app/Manager/Model/Room';
import { RoomService } from './../../../Manager/service/room-service.service';
import { PatientService } from 'src/app/schedule/service/patient.service';
import { Component, OnInit } from '@angular/core';
import { CreateMedicalTreatment } from '../../interface/CreateMedicalTreatment';
import { MatDialogRef } from '@angular/material/dialog';
import { CreateDialogComponentComponent } from '../create-dialog-component/create-dialog-component.component';

@Component({
  selector: 'app-dialog-content-component',
  templateUrl: './dialog-content-component.component.html',
  styleUrls: ['./dialog-content-component.component.scss'],
})
export class DialogContentComponentComponent implements OnInit {
  rooms: IRoom[];
  patients: Patient[];
  newMedicalTreatment: CreateMedicalTreatment;

  constructor(
    private patientService: PatientService,
    private roomService: RoomService,
    private toastService: ToastrService,
    private medicalTreatmentService: MedicalTreatmentService,
    private dialogRef: MatDialogRef<CreateDialogComponentComponent>
  ) {}

  ngOnInit(): void {
    this.getAvailableRooms();
    this.getNonHospitalizedPatients();

    this.newMedicalTreatment = {
      patientId: null as any,
      roomId: null as any,
      //fiksno, posle promeniti
      doctorId: 8,
      admittanceReason: '',
    };
  }

  getAvailableRooms(): void {
    this.roomService.getAvailableRooms().subscribe(
      (response: IRoom[]) => {
        this.rooms = response;
      },
      (error: HttpErrorResponse) => {
        this.toastService.error(error.message);
      }
    );
  }

  getNonHospitalizedPatients(): void {
    this.patientService.getNonHospitalized().subscribe(
      (response: Patient[]) => {
        this.patients = response;
      },
      (error: HttpErrorResponse) => {
        this.toastService.error(error.message);
      }
    );
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  createTreatment(): void {
    this.medicalTreatmentService
      .createMedicalTreatment(this.newMedicalTreatment)
      .subscribe(
        (response: MedicalTreatment) => {
          this.toastService.success('Treatment successfully created.');
          this.dialogRef.close();
        },
        (error: HttpErrorResponse) => {
          this.toastService.error(error.message);
        }
      );
  }
}
