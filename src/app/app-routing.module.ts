import { BaseComponentComponent } from './medical-treatment/show-treatments/base-component/base-component.component';
import { ReschedulingAppointmentComponent } from './schedule/rescheduling/rescheduling-appointment/rescheduling-appointment.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientTableComponent } from './schedule/patients/patient-table/patient-table.component';
import { AppointmentResolver } from './schedule/resolver/appointment-resolver';
import { AppointmentsComponent } from './schedule/show-all/appointments/appointments.component';
import { ViewRoomsComponent } from './Manager/view-rooms/view-rooms.component';
import { FeedbackViewComponent } from './Manager/feedback/feedback-view/feedback-view.component';
import { SchedulingComponent } from './schedule/scheduling/scheduling.component';
import { FeedComponent } from './newsfeed/feed/feed.component';
import { TreatmentViewComponent } from './medical-treatment/treatment/treatment-view/treatment-view.component';
import { TreatmentResolver } from './medical-treatment/resolver/treatmentResolver';
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
    path: 'newsfeed',
    component: FeedComponent,
  },
  {
    path: 'treatment/:id',
    component: TreatmentViewComponent,
    title: 'Stationary treatment',
    resolve: {
      treatment: TreatmentResolver,
    },
  },
  {
    path: 'show-treatments',
    component: BaseComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
