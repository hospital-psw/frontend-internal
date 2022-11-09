import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './stepper.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstStepFormModule } from '../first-step-form/first-step-form.module';

@NgModule({
  declarations: [
    StepperComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FirstStepFormModule,
    MaterialModule
  ],
  exports: [StepperComponent]
})
export class StepperModule { }
