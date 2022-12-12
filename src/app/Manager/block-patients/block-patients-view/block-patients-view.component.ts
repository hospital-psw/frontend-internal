import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { IPatient } from '../interface/ipatient';
import { TabBlockedPatientsComponent } from '../tab-blocked-patients/tab-blocked-patients.component';
import { TabMaliciousPatientsComponent } from '../tab-malicious-patients/tab-malicious-patients.component';

@Component({
  selector: 'app-block-patients-view',
  templateUrl: './block-patients-view.component.html',
  styleUrls: ['./block-patients-view.component.scss'],
})
export class BlockPatientsViewComponent {
  @ViewChild(TabBlockedPatientsComponent) private blockedPatientsComponent: TabBlockedPatientsComponent;
  @ViewChild(TabMaliciousPatientsComponent) private maliciousPatientsComponent: TabMaliciousPatientsComponent;
  @Output() selectedTabChange: EventEmitter<MatTabChangeEvent>

  onTabChanged(event: MatTabChangeEvent) 
  {
    if(event.index == 0)
    {
        this.maliciousPatientsComponent.getMaliciousPatients(); 
    }
    else
    {
      this.blockedPatientsComponent.getBlockedPatients();
    }
  }
}
