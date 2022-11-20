import { Component, Input, OnInit } from '@angular/core';
import { Patient } from 'src/app/schedule/interface/Patient';

@Component({
  selector: 'app-therapy-tabs',
  templateUrl: './therapy-tabs.component.html',
  styleUrls: ['./therapy-tabs.component.scss'],
})
export class TherapyTabsComponent implements OnInit {
  @Input() patient: Patient;
  @Input() treatmentId: number;

  constructor() {}

  ngOnInit(): void {}
}
