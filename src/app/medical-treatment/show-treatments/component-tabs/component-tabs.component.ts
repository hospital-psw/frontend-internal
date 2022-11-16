import { MedicalTreatment } from './../../interface/MedicalTreatment';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-tabs',
  templateUrl: './component-tabs.component.html',
  styleUrls: ['./component-tabs.component.scss']
})
export class ComponentTabsComponent implements OnInit {
  @Input() activeTreatments: MedicalTreatment[];
  @Input() inactiveTreatments: MedicalTreatment[];

  constructor() { }

  ngOnInit(): void { }
}
