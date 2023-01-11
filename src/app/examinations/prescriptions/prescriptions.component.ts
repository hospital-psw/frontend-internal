import { FormGroup, FormControl } from '@angular/forms';
import { throwError } from 'rxjs';
import { Medicament } from './../../medical-treatment/interface/Medicament';
import { MedicineService } from './../../medical-treatment/service/medicine.service';
import { ToastrService } from 'ngx-toastr';
import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  Input,
  Inject,
} from '@angular/core';
import { NewPrescription } from '../interface/NewPrescription';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { isReturnStatement } from 'typescript';
import { EventService } from '../services/event.service';
import { PrescriptionCreated } from '../interface/events/PrescriptionCreated';
import { Anamnesis } from '../interface/Anamnesis';

@Component({
  selector: 'app-prescriptions',
  templateUrl: './prescriptions.component.html',
  styleUrls: ['./prescriptions.component.scss'],
})
export class PrescriptionsComponent implements OnInit {
  range = new FormGroup({
    from: new FormControl<Date | null>(null),
    to: new FormControl<Date | null>(null),
  });

  @Output() prescriptionCreatedEvent = new EventEmitter<NewPrescription>();
  newPrescription: NewPrescription;
  medicaments: Medicament[];
  selectedMedicament: Medicament;
  patientId: number;
  modalState: boolean;
  prescriptionCreated: PrescriptionCreated;
  anamnesis: Anamnesis;

  constructor(
    private toastrService: ToastrService,
    private medicamentService: MedicineService,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<PrescriptionsComponent>,
    private eventService: EventService
  ) {
    console.log(data.patientId);
    this.patientId = data.patientId;
  }

  ngOnInit(): void {
    this.newPrescription = {
      medicine: {
        id: -1,
        description: '',
        name: '',
        quantity: -1,
      },
      medicamentId: -1,
      description: '',
      from: new Date(),
      to: new Date(),
    };
    this.getAcceptableMedicine(this.patientId);
  }

  getAcceptableMedicine(patientId: number) {
    this.medicamentService.getAcceptable(patientId).subscribe(
      (response) => {
        this.medicaments = response;
      },
      (error) => {
        this.toastrService.error(
          'Unable to fetch medicaments for patients: ' + error.error
        );
      }
    );
  }

  createPrescription(): void {
    this.newPrescription.from = this.range.controls['from'].value as Date;
    this.newPrescription.to = this.range.controls['to'].value as Date;
    this.newPrescription.medicamentId = this.newPrescription.medicine.id;
    if (this.newPrescription.medicamentId === -1) {
      this.toastrService.warning('Please select medicament for prescription');
      return;
    } else if (!this.newPrescription.description) {
      this.toastrService.warning('Please enter description');
      return;
    } else if (this.newPrescription.from > this.newPrescription.to) {
      this.toastrService.warning('Please select valid date range');
      return;
    }
    this.prescriptionCreated = {
      userId: this.data.doctorId,
      aggregateId: this.data.aggregateId,
      timeStamp: new Date(),
      eventType: 4,
      newPrescription: this.newPrescription,
    };
    this.eventService.addPrescription(this.prescriptionCreated).subscribe(
      (response) => {
        this.toastrService.success('Succesfully created prescription');
        this.modalState = true;
        this.dialogRef.close({
          anamnesis: response,
          modalState: this.modalState,
        });
      },
      (error) => {
        this.toastrService.error(error.error);
      }
    );
  }

  closeDialog(): void {
    this.modalState = false;
    this.dialogRef.close({ modalState: this.modalState });
  }
}
