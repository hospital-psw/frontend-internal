import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacationRequestService } from './service/vacation-request.service';
import { CreateRequestFormComponent } from './create-request-form/create-request-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDateRangeInput, MatDateRangePicker } from '@angular/material/datepicker';
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





@NgModule({
  declarations: [
    CreateRequestFormComponent,
    VacationRequestComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatPseudoCheckboxModule,
    FormsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [
    VacationRequestService
  ]
})
export class VacationRequestModule { }
