import { ScheduleModule } from './consilium/schedule.module';
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
import { ReschedulingAppointmentTableComponent } from './rescheduling/rescheduling-appointment-table/rescheduling-appointment-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { AppointmentsComponent } from './show-all/appointments/appointments.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { ReschedulingAppointmentCardComponent } from './rescheduling/rescheduling-appointment-card/rescheduling-appointment-card.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SchedulingAppointmentFormComponent } from './scheduling/scheduling-appointment-form/scheduling-appointment-form/scheduling-appointment-form.component';
import { PatientService } from './service/patient.service';
import { SchedulingAppointmentTableComponent } from './scheduling/scheduling-appointment-table/scheduling-appointment-table/scheduling-appointment-table.component';
import { SchedulingAppointmentCardComponent } from './scheduling/scheduling-appointment-card/scheduling-appointment-card/scheduling-appointment-card.component';
import { BloodAcquisitionComponent } from '../BloodManagment/BloodAcquisition/blood-acquisition/blood-acquisition.component';
import { BottomSheetComponent } from './show-all/bottom-sheet/bottom-sheet.component';
import { MatListModule } from '@angular/material/list';
import {
  NgxUiLoaderConfig,
  NgxUiLoaderHttpModule,
  NgxUiLoaderModule,
  POSITION,
  SPINNER,
} from 'ngx-ui-loader';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: '#1493ff',
  fgsPosition: 'center-center',
  fgsSize: 90,
  fgsType: SPINNER.threeBounce,
  gap: 24,
  logoPosition: POSITION.centerCenter,
  logoSize: 120,
  logoUrl: '',
  masterLoaderId: 'master',
  overlayBorderRadius: '0',
  overlayColor: 'rgba(40, 40, 40, 0.8)',
  pbColor: '#1493ff',
  pbDirection: 'ltr',
  pbThickness: 3,
  hasProgressBar: true,
};
@NgModule({
  declarations: [
    ReschedulingAppointmentComponent,
    ReschedulingAppointmentFormComponent,
    ReschedulingAppointmentTableComponent,
    AppointmentsComponent,
    SchedulingComponent,
    ReschedulingAppointmentCardComponent,
    SchedulingAppointmentFormComponent,
    SchedulingAppointmentTableComponent,
    SchedulingAppointmentCardComponent,
    BottomSheetComponent,
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
    ScheduleModule,
    MatListModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
  ],
  providers: [ScheduleService, PatientService],
})
export class AppointmentModule {}
