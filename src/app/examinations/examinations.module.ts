import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExaminationStepperComponent } from './examination-stepper/examination-stepper.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [ExaminationStepperComponent, PrescriptionsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
  ],
})
export class ExaminationsModule {}
