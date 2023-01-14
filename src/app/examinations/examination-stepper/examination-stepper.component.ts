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
import { Symptom } from '../interface/Symptom';
import { AnamnesisService } from '../services/anamnesis.service';
import { NewPrescription } from '../interface/NewPrescription';
import { AuthService } from 'src/app/common/auth/service/auth.service';
import { Subscription } from 'rxjs';
import { EventService } from '../services/event.service';
import { ExaminationEvent } from '../interface/events/ExaminationEvent';
import { ExaminationStarted } from '../interface/events/ExaminationStarted';
import { ExaminationFinished } from '../interface/events/ExaminationFinished';
import { PrescriptionCreated } from '../interface/events/PrescriptionCreated';
import { PrescriptionRemoved } from '../interface/events/PrescriptionRemoved';
import { DescriptionCreated } from '../interface/events/DescriptionCreated';
import { SymptomsChanged } from '../interface/events/SymptomsChanged';
import { Anamnesis } from '../interface/Anamnesis';
import { Perscription } from '../interface/Perscription';

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
  anamnesis: Anamnesis;
  appointment: Appointment;
  newPrescription: NewPrescription;
  description: string;
  perscriptions: Perscription[];
  doctorId: number;
  private userSub: Subscription;
  isLoading: boolean;

  examinationEvent: ExaminationEvent;
  examinationStarted: ExaminationStarted;
  examinationFinished: ExaminationFinished;
  prescriptionCreated: PrescriptionCreated;
  prescriptionRemoved: PrescriptionRemoved;
  descriptionCreated: DescriptionCreated;
  symptomsChanged: SymptomsChanged;

  constructor(
    private medicineService: MedicineService,
    private router: Router,
    private anamnesisService: AnamnesisService,
    private symptomService: SymptomService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private authService: AuthService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.appointment = this.route.snapshot.data['appointment'];
    this.getSymptoms();
    this.selectedSymptoms = [];
    this.perscriptions = [];
    this.anamnesis = {
      id: -1,
      appointment: this.appointment,
      symptoms: [],
      prescriptions: [],
      description: '',
    };
    this.userSub = this.authService.user.subscribe((user) => {
      this.doctorId = user.id;
    });
    this.description = this.anamnesis.description;
    this.startExamination();
    this.isLoading = false;
  }

  startExamination(): void {
    this.examinationStarted = {
      userId: this.doctorId,
      aggregateId: this.anamnesis.id,
      timeStamp: new Date(),
      eventType: 0,
      appointmentId: this.appointment.id,
    };
    this.eventService.startExamination(this.examinationStarted).subscribe(
      (response) => {
        this.anamnesis = response;
        this.handleAnamnesisLoad(this.anamnesis);
      },
      (error) => {
        this.toastr.error(error.error);
      }
    );
    console.log(this.perscriptions);
  }

  handleAnamnesisLoad(anamnesis: Anamnesis): void {
    this.selectedSymptoms = anamnesis.symptoms;
    this.perscriptions = anamnesis.prescriptions;
    this.description = anamnesis.description;
    this.removeSymptoms(this.selectedSymptoms);
  }

  removeSymptoms(selectedSymptoms: Symptom[]): void {
    this.symptoms = this.symptoms.filter(
      (s) => !selectedSymptoms.some((item) => item.id === s.id)
    );
  }

  getSymptoms(): void {
    this.symptomService.getSymptoms().subscribe((response) => {
      this.symptoms = response;
    });
  }

  handleSymptomChange(symptom: Symptom, status: number): void {
    this.symptomsChanged = {
      userId: this.doctorId,
      aggregateId: this.anamnesis.id,
      timeStamp: new Date(),
      eventType: 2,
      symptomId: symptom.id,
      status: status,
    };
    this.eventService.manageSymptom(this.symptomsChanged).subscribe(
      (response) => {
        this.anamnesis = response;
        this.handleAnamnesisLoad(this.anamnesis);
      },
      (error) => {
        this.toastr.error(error.error);
      }
    );
  }

  executeBasicEvent(type: number): void {
    this.examinationEvent = {
      userId: this.doctorId,
      aggregateId: this.anamnesis.id,
      timeStamp: new Date(),
      eventType: type,
    };
    this.eventService.executeEvent(this.examinationEvent).subscribe(
      (response) => {},
      (error) => {
        this.toastr.error(error.error);
      }
    );
  }

  createDescription(): void {
    this.descriptionCreated = {
      userId: this.doctorId,
      aggregateId: this.anamnesis.id,
      timeStamp: new Date(),
      eventType: 3,
      description: this.description,
    };
    console.log('Ovo je description: ', this.description);
    if (
      this.anamnesis.description &&
      this.description.toUpperCase() ===
        this.anamnesis.description.toUpperCase()
    ) {
      return;
    }
    this.eventService.createDescription(this.descriptionCreated).subscribe(
      (response) => {
        this.anamnesis = response;
        this.handleAnamnesisLoad(this.anamnesis);
      },
      (error) => {
        this.toastr.error(error.error);
      }
    );
  }

  drop(event: CdkDragDrop<Symptom[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      if (this.getIdParity(event.previousContainer.id)) {
        this.handleSymptomChange(
          event.previousContainer.data.at(event.previousIndex) as Symptom,
          0
        );
      } else {
        this.handleSymptomChange(
          event.previousContainer.data.at(event.previousIndex) as Symptom,
          1
        );
      }
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  getIdParity(id: string): boolean {
    let idString = id.split('-');
    let parityNumber = parseInt(idString[3]);
    return parityNumber % 2 === 0;
  }

  removePrescription(prescription: Perscription): void {
    this.prescriptionRemoved = {
      userId: this.doctorId,
      aggregateId: this.anamnesis.id,
      timeStamp: new Date(),
      eventType: 5,
      prescriptionId: prescription.id,
    };
    this.eventService.removePrescription(this.prescriptionRemoved).subscribe(
      (response) => {
        this.anamnesis = response;
        this.handleAnamnesisLoad(this.anamnesis);
      },
      (error) => {
        this.toastr.error(error.error);
      }
    );
  }

  finishExamination(): void {
    this.examinationFinished = {
      userId: this.doctorId,
      aggregateId: this.anamnesis.id,
      timeStamp: new Date(),
      eventType: 1,
      appointmentId: this.appointment.id,
    };
    this.eventService.finishExamination(this.examinationFinished).subscribe(
      (response) => {
        this.router.navigate(['/app/appointments']);
        this.toastr.success('Examination is succesfully finished');
      },
      (error) => {
        this.toastr.error(error.error);
      }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog
      .open(PrescriptionsComponent, {
        data: {
          patientId: this.appointment.patient.id,
          aggregateId: this.anamnesis.id,
          doctorId: this.doctorId,
        },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result.modalState) {
          this.anamnesis = result.anamnesis;
          this.handleAnamnesisLoad(this.anamnesis);
        }
      });
  }
}
