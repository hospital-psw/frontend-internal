import { MedicalTreatment } from './../../interface/MedicalTreatment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.scss']
})
export class BaseComponentComponent implements OnInit {
  activeTreatments: MedicalTreatment[];
  inactiveTreatments: MedicalTreatment[];

  constructor() { }

  ngOnInit(): void { }

  storeActiveTreatments(activeTreatments: MedicalTreatment[]) {
    this.activeTreatments = activeTreatments;
  }
  storeInactiveTreatments(inactiveTreatments: MedicalTreatment[]) {
    this.inactiveTreatments = inactiveTreatments;
  }
}
