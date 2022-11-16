import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { AllComponent } from './all/all.component';
import { MaterialModule } from '../material/material.module';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

const routes: Routes = [
  { path: 'bloodbank', component: AllComponent },
  { path: 'bloodbank/add', component: CreateComponent },
  { path: 'bloodbank/:id/update', component: UpdateComponent },
  { path: 'bloodbank/:id/detail', component: DetailComponent },
];

@NgModule({
  declarations: [
    CreateComponent,
    UpdateComponent,
    AllComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatTableModule,
    MatOptionModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ],
  exports: [RouterModule],
})
export class BloodBankModule {}
