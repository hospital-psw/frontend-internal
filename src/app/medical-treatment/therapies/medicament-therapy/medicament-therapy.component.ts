import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Patient } from 'src/app/schedule/interface/Patient';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NewTherapyDialogComponent } from '../new-therapy-dialog/new-therapy-dialog.component';
import { MedicamentTherapyService } from '../../service/medicament-therapy.service';
import { MedicineService } from '../../service/medicine.service';
import { Medicament } from '../../interface/Medicament';
import { NewMedicamentTherapy } from '../../interface/NewMedicamentTherapy';

@Component({
  selector: 'app-medicament-therapy',
  templateUrl: './medicament-therapy.component.html',
  styleUrls: ['./medicament-therapy.component.scss'],
})
export class MedicamentTherapyComponent implements OnInit {
  @Input() patient: Patient;
  @Input() treatmentId: number;
  amount: number;
  description: string;
  medicines: Medicament[];
  newMedicamentTherapy: NewMedicamentTherapy;

  constructor(
    private toastService: ToastrService,
    private dialogRef: MatDialogRef<NewTherapyDialogComponent>,
    private therapyService: MedicamentTherapyService,
    private medicineService: MedicineService
  ) { }

  ngOnInit(): void {
    this.getMedicaments();
    this.newMedicamentTherapy = {
      medicalTreatmentId: this.treatmentId,
      medicamentId: -1,
      about: '',
      amount: 0,
    };
  }

  getMedicaments(): void {
    this.medicineService.getMedicines().subscribe((response) => {
      this.medicines = response;
    });
  }

  public addTherapy(): void {
    this.therapyService
      .createMedicamentTherapy(this.newMedicamentTherapy)
      .subscribe(
        (response) => {
          this.toastService.success('Therapy successfully created');
          this.dialogRef.close();
        },
        (error: HttpErrorResponse) => {
          this.toastService.error(error.message);
        }
      );
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }
}
