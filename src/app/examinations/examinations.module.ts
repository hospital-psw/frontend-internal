import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExaminationStepperComponent } from './examination-stepper/examination-stepper.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ExaminationStepperComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ExaminationsModule { }
