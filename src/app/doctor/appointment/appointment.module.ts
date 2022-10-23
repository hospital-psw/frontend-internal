import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReschedulingAppointmentComponent } from './../appointment/rescheduling/rescheduling-appointment/rescheduling-appointment.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { AppointmentService } from './../service/appointment.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { ReschedulingAppointmentFormComponent } from './../appointment/rescheduling/rescheduling-appointment-form/rescheduling-appointment-form.component';
import { ReschedulingAppointmentHeaderComponent } from './rescheduling/rescheduling-appointment-header/rescheduling-appointment-header.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    ReschedulingAppointmentComponent,
    ReschedulingAppointmentFormComponent,
    ReschedulingAppointmentHeaderComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [
    AppointmentService
  ],
})
export class AppointmentModule { }
