import { Component, OnInit } from '@angular/core';
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
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Appointment } from 'src/app/schedule/interface/Appointment';
import { ActivatedRoute, Router } from '@angular/router';
import { Symptom } from '../interface/symptom';
import { AnamnesisService } from '../services/anamnesis.service';

@Component({
  selector: 'app-examination-stepper',
  templateUrl: './examination-stepper.component.html',
  styleUrls: ['./examination-stepper.component.scss']
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

  constructor(
    private medicineService: MedicineService,
    private router: Router,
    private anamnesisService: AnamnesisService,
    private symptomService: SymptomService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.appointment = this.route.snapshot.data['appointment']
    this.getSymptoms();
    this.selectedSymptoms = [];
    this.anamnesis = {
      appointmentId: this.appointment.id,
      symptoms: [],
      prescriptions: [],
      description: ""
    }
  }

  getSymptoms() : void {
    this.symptomService.getSymptoms().subscribe((response) => {
      this.symptoms = response;
    })
  }
  
  drop(event: CdkDragDrop<Symptom[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  createAnamnesis() : void {
    this.selectedSymptoms.map(item => this.anamnesis.symptoms.push(item.id));
    this.anamnesisService.createAnamnesis(this.anamnesis).subscribe((res) => {
      this.toastr.success("Succesfully finished examinaiton")
      this.router.navigate(['appointments'])
    }, (error) => {
      this.toastr.error(error.error)
    })
  }

}
