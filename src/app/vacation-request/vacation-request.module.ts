import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacationRequestService } from './service/vacation-request.service';
import { CreateRequestFormComponent } from './create-request-form/create-request-form.component';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDateRangeInput,
  MatDateRangePicker,
} from '@angular/material/datepicker';
import { MatLabel } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VacationRequestComponent } from './vacation-request/vacation-request.component';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { AllComponent } from './all/all.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {path: 'vacation-requests', component: AllComponent},
  {path: 'vacation-requests/create', component: CreateRequestFormComponent}
]

@NgModule({
  declarations: [CreateRequestFormComponent, VacationRequestComponent, AllComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatPseudoCheckboxModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  providers: [VacationRequestService],
})
export class VacationRequestModule {}
