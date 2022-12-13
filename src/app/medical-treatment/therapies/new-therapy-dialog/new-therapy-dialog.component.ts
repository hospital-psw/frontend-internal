import { Component, Input, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Patient } from 'src/app/schedule/interface/Patient';

@Component({
  selector: 'app-new-therapy-dialog',
  templateUrl: './new-therapy-dialog.component.html',
  styleUrls: ['./new-therapy-dialog.component.scss'],
})
export class NewTherapyDialogComponent implements OnInit {
  patient: Patient;
  treatmentId: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<NewTherapyDialogComponent>
  ) {
    this.patient = data.patient;
    this.treatmentId = data.treatmentId;
  }

  ngOnInit(): void {}
}
