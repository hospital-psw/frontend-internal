import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Patient } from './../../../schedule/interface/Patient';
import { IRoom } from 'src/app/Manager/Model/Room';
import { RoomService } from './../../../Manager/service/room-service.service';
import { PatientService } from 'src/app/schedule/service/patient.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-content-component',
  templateUrl: './dialog-content-component.component.html',
  styleUrls: ['./dialog-content-component.component.scss']
})
export class DialogContentComponentComponent implements OnInit {
  rooms: IRoom[];
  patients: Patient[];
  selectedRoomId: number;
  selectedPatientId: number;

  constructor(
    private patientService: PatientService,
    private roomService: RoomService,
    private toastService: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAvailableRooms();
    this.getNonHospitalizedPatients();
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
    //close dialog
  }
}
