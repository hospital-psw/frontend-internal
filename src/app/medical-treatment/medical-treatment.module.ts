import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTreatmentBaseComponent } from './create-medical-treatment/base-create-treatment/create-treatment-base.component';
import { CreateTreatmentFormComponent } from './create-medical-treatment/create-treatment-form/create-treatment-form.component';
import { TreatmentViewComponent } from './treatment/treatment-view/treatment-view.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateTreatmentBaseComponent,
    CreateTreatmentFormComponent,
    TreatmentViewComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class MedicalTreatmentModule {}
