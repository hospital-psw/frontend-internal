import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockPatientsViewComponent } from './block-patients-view/block-patients-view.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import { TabMaliciousPatientsComponent } from './tab-malicious-patients/tab-malicious-patients.component';
import { TabBlockedPatientsComponent } from './tab-blocked-patients/tab-blocked-patients.component';



@NgModule({
  declarations: [
    BlockPatientsViewComponent,
    TabMaliciousPatientsComponent,
    TabBlockedPatientsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class BlockPatientsModule { }
