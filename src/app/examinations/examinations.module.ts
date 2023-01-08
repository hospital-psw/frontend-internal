import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExaminationStepperComponent } from './examination-stepper/examination-stepper.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BaseComponent } from './anamnesis-perscriptions-review/base/base.component';
import { PerscriptionsTabComponent } from './anamnesis-perscriptions-review/perscriptions-tab/perscriptions-tab.component';
import { AnamnesisTabComponent } from './anamnesis-perscriptions-review/anamnesis-tab/anamnesis-tab.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    ExaminationStepperComponent,
    PrescriptionsComponent,
    BaseComponent,
    PerscriptionsTabComponent,
    AnamnesisTabComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatTabsModule,
  ],
})
export class ExaminationsModule {}
