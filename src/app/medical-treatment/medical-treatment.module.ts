import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTreatmentBaseComponent } from './create-medical-treatment/create-treatment-base/create-treatment-base.component';
import { CreateTreatmentFormComponent } from './create-medical-treatment/create-treatment-form/create-treatment-form.component';

@NgModule({
  declarations: [CreateTreatmentBaseComponent, CreateTreatmentFormComponent],
  imports: [CommonModule],
})
export class MedicalTreatmentModule {}
