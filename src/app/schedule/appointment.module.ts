import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReschedulingAppointmentComponent } from './../schedule/rescheduling/rescheduling-appointment/rescheduling-appointment.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ScheduleService } from './service/schedule.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { ReschedulingAppointmentFormComponent } from './../schedule/rescheduling/rescheduling-appointment-form/rescheduling-appointment-form.component';
import { ReschedulingAppointmentHeaderComponent } from './rescheduling/rescheduling-appointment-header/rescheduling-appointment-header.component';
import { ReschedulingAppointmentTableComponent } from './rescheduling/rescheduling-appointment-table/rescheduling-appointment-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { AppointmentsComponent } from './show-all/appointments/appointments.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { ReschedulingAppointmentCardComponent } from './rescheduling/rescheduling-appointment-card/rescheduling-appointment-card.component';

@NgModule({
  declarations: [
    ReschedulingAppointmentComponent,
    ReschedulingAppointmentFormComponent,
    ReschedulingAppointmentHeaderComponent,
    ReschedulingAppointmentTableComponent,
    AppointmentsComponent,
    SchedulingComponent,
    ReschedulingAppointmentCardComponent,
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
    MatTableModule,
    MatPaginatorModule,
    MatDividerModule,
  ],
  providers: [ScheduleService],
})
export class AppointmentModule {}
