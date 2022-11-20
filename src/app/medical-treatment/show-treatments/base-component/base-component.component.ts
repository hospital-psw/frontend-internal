import { MedicalTreatment } from './../../interface/MedicalTreatment';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.scss'],
})
export class BaseComponentComponent implements OnInit {
  activeTreatments: MedicalTreatment[];
  inactiveTreatments: MedicalTreatment[];
  @Input() pageSizeFirst: number;
  @Input() pageNumberFirst: number;
  @Input() pageSizeSecond: number;
  @Input() pageNumberSecond: number;

  constructor() {}

  ngOnInit(): void {}

  storeActiveTreatments(activeTreatments: MedicalTreatment[]) {
    this.activeTreatments = activeTreatments;
  }
  storeInactiveTreatments(inactiveTreatments: MedicalTreatment[]) {
    this.inactiveTreatments = inactiveTreatments;
  }

  storePageNumberSecond(pageNumber: number) {
    this.pageNumberSecond = pageNumber;
  }
  storePageSizeSecond(pageSize: number) {
    this.pageSizeSecond = pageSize;
  }
  storePageNumberFirst(pageNumber: number) {
    this.pageNumberFirst = pageNumber;
  }
  storePageSizeFirst(pageSize: number) {
    this.pageSizeFirst = pageSize;
  }
}
