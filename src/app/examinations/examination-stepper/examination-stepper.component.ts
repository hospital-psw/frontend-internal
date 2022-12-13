import { PrescriptionsComponent } from './../prescriptions/prescriptions.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MedicineService } from 'src/app/medical-treatment/service/medicine.service';
import { NewAnamnesis } from '../interface/NewAnamnesis';
import { SymptomService } from '../services/symptom.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Appointment } from 'src/app/schedule/interface/Appointment';
import { ActivatedRoute, Router } from '@angular/router';
import { Symptom } from '../interface/symptom';
import { AnamnesisService } from '../services/anamnesis.service';
import { NewPrescription } from '../interface/NewPrescription';

@Component({
  selector: 'app-examination-stepper',
  templateUrl: './examination-stepper.component.html',
  styleUrls: ['./examination-stepper.component.scss'],
})
export class ExaminationStepperComponent implements OnInit {
  symptomForm = new FormGroup({
    symptomControl: new FormControl(),
  });

  anamnesisForm = new FormGroup({
    anamnesisControl: new FormControl(),
  });

  prescriptionForm = new FormGroup({
    prescriptionControl: new FormControl(),
  });

  symptoms: Symptom[];
  selectedSymptoms: Symptom[];
  anamnesis: NewAnamnesis;
  appointment: Appointment;
  newPrescription: NewPrescription;
  prescriptions: NewPrescription[];

  constructor(
    private medicineService: MedicineService,
    private router: Router,
    private anamnesisService: AnamnesisService,
    private symptomService: SymptomService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.appointment = this.route.snapshot.data['appointment'];
    this.getSymptoms();
    this.selectedSymptoms = [];
    this.prescriptions = [];
    this.anamnesis = {
      appointmentId: this.appointment.id,
      symptomIds: [],
      newPrescriptions: [],
      description: '',
    };
  }

  getSymptoms(): void {
    this.symptomService.getSymptoms().subscribe((response) => {
      this.symptoms = response;
    });
  }

  drop(event: CdkDragDrop<Symptom[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  createAnamnesis(): void {
    this.selectedSymptoms.map((item) =>
      this.anamnesis.symptomIds.push(item.id)
    );
    this.anamnesis.newPrescriptions = this.prescriptions;
    this.anamnesisService.createAnamnesis(this.anamnesis).subscribe(
      (res) => {
        this.toastr.success('Succesfully finished examinaiton');
        this.router.navigate(['appointments']);
      },
      (error) => {
        this.toastr.error(error.error);
      }
    );
  }

  updatePrescriptions(prescription: NewPrescription) {
    this.prescriptions.push(prescription);
  }

  openDialog(): void {
    const dialogRef = this.dialog
      .open(PrescriptionsComponent, {
        data: { patientId: this.appointment.patient.id },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result.modalState) {
          this.updatePrescriptions({
            medicine: result.newPrescription.medicine,
            medicamentId: result.newPrescription.medicamentId,
            description: result.newPrescription.description,
            from: result.newPrescription.from,
            to: result.newPrescription.to,
          });
        }
      });
  }
}
