import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { ToastrService } from 'ngx-toastr';
import { Patient } from 'src/app/schedule/interface/Patient';
import { BloodType } from '../../enum/BloodType.enum';
import { BloodUnit } from '../../interface/BloodUnit';
import { BloodUnitTherapy } from '../../interface/BloodUnitTherapy';
import { NewBloodUnitTherapy } from '../../interface/NewBloodUnitTherapy';
import { BloodUnitService } from '../../service/blood-unit.service';
import { BloodunitTherapyService } from '../../service/bloodunit-therapy.service';
import { NewTherapyDialogComponent } from '../new-therapy-dialog/new-therapy-dialog.component';

@Component({
  selector: 'app-blood-unit-therapy',
  templateUrl: './blood-unit-therapy.component.html',
  styleUrls: ['./blood-unit-therapy.component.scss']
})
export class BloodUnitTherapyComponent implements OnInit, OnChanges {

  @Input() patient: Patient;
  @Input() treatmentId: number;
  bloodUnit: BloodUnit;
  newBloodUnitTherapy: NewBloodUnitTherapy;
  bloodTypes = Object.values(BloodType);
  bloodTypeString : string;
  amount: number;
  description: string;

  constructor(private toastService: ToastrService,
              private dialogRef: MatDialogRef<NewTherapyDialogComponent>,
              private bloodUnitTherapyService: BloodunitTherapyService,
              private bloodUnitService: BloodUnitService) { }

  ngOnInit(): void {
    this.getBloodUnitForPatient();
    console.log('BUTC', this.treatmentId)
    this.newBloodUnitTherapy = {
      medicalTreatmentId: this.treatmentId,
      bloodUnitId: -1,
      amount: -1,
      about: ""
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getBloodUnitForPatient();
  }

  getBloodUnitForPatient() : void {
    this.bloodUnitService.getByBloodType(this.patient.bloodType).subscribe((response : BloodUnit) => {
      this.bloodUnit = response;
      this.bloodTypeString = this.bloodTypes[parseInt(this.bloodUnit.bloodType)];
    },
      (error: HttpErrorResponse) => {
        this.toastService.error(error.message);
      })
  }

  addTherapy() : void {
    this.newBloodUnitTherapy.medicalTreatmentId = this.treatmentId;
    this.newBloodUnitTherapy.bloodUnitId = this.bloodUnit.id;
    this.newBloodUnitTherapy.about = this.description;
    this.newBloodUnitTherapy.amount = this.amount;
    console.log(this.newBloodUnitTherapy)
    this.bloodUnitTherapyService.createBloodUnitTherapy(this.newBloodUnitTherapy).subscribe((response: BloodUnitTherapy) => {
      this.toastService.success('Therapy succesfully created')
      this.dialogRef.close();
    })
  }

  closeDialog() : void {
    this.dialogRef.close();
  }

}
