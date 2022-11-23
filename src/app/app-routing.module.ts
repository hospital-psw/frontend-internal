import { BaseComponentComponent } from './medical-treatment/show-treatments/base-component/base-component.component';
import { ReschedulingAppointmentComponent } from './schedule/rescheduling/rescheduling-appointment/rescheduling-appointment.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientTableComponent } from './schedule/patients/patient-table/patient-table.component';
import { AppointmentResolver } from './schedule/resolver/appointment-resolver';
import { AppointmentsComponent } from './schedule/show-all/appointments/appointments.component';
import { ViewRoomsComponent } from './Manager/view-rooms/view-rooms.component';
import { FeedbackViewComponent } from './Manager/feedback/feedback-view/feedback-view.component';
import { BloodRequestModule } from './Manager/blood-request/blood-request.module';
import { SchedulingComponent } from './schedule/scheduling/scheduling.component';
import { BloodRequestViewComponent } from './Manager/blood-request/blood-request-view/blood-request-view.component';
import { FeedComponent } from './newsfeed/feed/feed.component';
import { VacationRequestComponent } from './vacation-request/vacation-request/vacation-request.component';
import { TreatmentViewComponent } from './medical-treatment/treatment/treatment-view/treatment-view.component';
import { TreatmentResolver } from './medical-treatment/resolver/treatmentResolver';
import { VacationRequestsComponent } from './Manager/view-vacation-requests/vacation-requests.component';

import { BloodAcquisitionComponent } from './BloodManagment/BloodAcquisition/blood-acquisition/blood-acquisition.component';
import { DoctorRequestsComponent } from './BloodManagment/doctor-requests/doctor-requests.component';
import { BloodExpenditureComponent } from './BloodManagment/BloodExpenditure/blood-expenditure/blood-expenditure.component';
const routes: Routes = [
  {
    path: 'appointments',
    component: AppointmentsComponent,
  },
  {
    path: 'patients',
    component: PatientTableComponent,
  },
  {
    path: 'display',
    component: ViewRoomsComponent,
  },
  {
    path: 'reschedule-appointment/:id',
    component: ReschedulingAppointmentComponent,
    resolve: {
      appointment: AppointmentResolver,
    },
  },
  {
    path: 'feedback',
    component: FeedbackViewComponent,
  },
  {
    path: 'appointments/scheduling',
    component: SchedulingComponent,
  },
  {
    path: 'bloodAcquisition/create',
    component: BloodAcquisitionComponent,
  },
  {
    path: 'doctorBloodRequests',
    component: DoctorRequestsComponent,
  },
  {
    path: 'bloodExpenditure/create',
    component: BloodExpenditureComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
