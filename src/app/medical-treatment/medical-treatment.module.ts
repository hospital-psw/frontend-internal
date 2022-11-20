import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { BaseComponentComponent } from './show-treatments/base-component/base-component.component';
import { ComponentButtonBarComponent } from './show-treatments/component-button-bar/component-button-bar.component';
import { ComponentTabsComponent } from './show-treatments/component-tabs/component-tabs.component';
import { FirstTabComponentComponent } from './show-treatments/first-tab-component/first-tab-component.component';
import { SecondTabComponentComponent } from './show-treatments/second-tab-component/second-tab-component.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CreateDialogComponentComponent } from './show-treatments/create-dialog-component/create-dialog-component.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogContentComponentComponent } from './show-treatments/dialog-content-component/dialog-content-component.component';
import { TreatmentViewComponent } from './treatment/treatment-view/treatment-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewTherapyDialogComponent } from './therapies/new-therapy-dialog/new-therapy-dialog.component';
import { MedicamentTherapyComponent } from './therapies/medicament-therapy/medicament-therapy.component';
import { BloodUnitTherapyComponent } from './therapies/blood-unit-therapy/blood-unit-therapy.component';
import { TherapyTabsComponent } from './therapies/therapy-tabs/therapy-tabs.component';
import { MatInput } from '@angular/material/input';

@NgModule({
  declarations: [
    BaseComponentComponent,
    ComponentButtonBarComponent,
    ComponentTabsComponent,
    FirstTabComponentComponent,
    SecondTabComponentComponent,
    CreateDialogComponentComponent,
    DialogContentComponentComponent,
    TreatmentViewComponent,
    NewTherapyDialogComponent,
    MedicamentTherapyComponent,
    BloodUnitTherapyComponent,
    TherapyTabsComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    FormsModule,
  ],
})
export class MedicalTreatmentModule {}
