import { FeedComponent } from './../../newsfeed/feed/feed.component';
import { AllComponent } from './../../blood-bank/all/all.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReconsiderBloodRequestComponent } from 'src/app/Manager/blood-request/reconsider-blood-request/reconsider-blood-request/reconsider-blood-request.component';
import { BloodExpenditureComponent } from 'src/app/BloodManagment/BloodExpenditure/blood-expenditure/blood-expenditure.component';
import { ScheduleConsiliumComponent } from 'src/app/schedule/consilium/schedule-consilium/main-component/schedule-consilium.component';
import { AllConsiliumsComponent } from 'src/app/schedule/consilium/all-consiliums/all-consiliums.component';
import { StatisticsComponent } from 'src/app/Statistics/statistics/Components/statistics/statistics.component';
import { VacationRequestsComponent } from 'src/app/Manager/view-vacation-requests/vacation-requests.component';
import { BaseComponentComponent } from 'src/app/medical-treatment/show-treatments/base-component/base-component.component';
import { TreatmentResolver } from 'src/app/medical-treatment/resolver/treatmentResolver';
import { TreatmentViewComponent } from 'src/app/medical-treatment/treatment/treatment-view/treatment-view.component';
import { VacationRequestComponent } from 'src/app/vacation-request/vacation-request/vacation-request.component';
import { UrgentBloodRequestComponent } from 'src/app/BloodManagment/UrgentBloodRequest/urgent-blood-request/urgent-blood-request.component';
import { BloodAcquisitionComponent } from 'src/app/BloodManagment/BloodAcquisition/blood-acquisition/blood-acquisition.component';
import { DoctorRequestsComponent } from 'src/app/BloodManagment/doctor-requests/doctor-requests.component';
import { SchedulingComponent } from 'src/app/schedule/scheduling/scheduling.component';
import { FeedbackViewComponent } from 'src/app/Manager/feedback/feedback-view/feedback-view.component';
import { AppointmentResolver } from 'src/app/schedule/resolver/appointment-resolver';
import { ReschedulingAppointmentComponent } from 'src/app/schedule/rescheduling/rescheduling-appointment/rescheduling-appointment.component';
import { ViewRoomsComponent } from 'src/app/Manager/view-rooms/view-rooms.component';
import { PatientTableComponent } from 'src/app/schedule/patients/patient-table/patient-table.component';
import { AppointmentsComponent } from 'src/app/schedule/show-all/appointments/appointments.component';
import { CreateRequestFormComponent } from 'src/app/vacation-request/create-request-form/create-request-form.component';
import { ShowTendersComponent } from 'src/app/tenders/show-tenders/show-tenders.component';
import { CreateTenderComponent } from 'src/app/tenders/create-tender/create-tender.component';

const routes: Routes = [
  {
    path: 'appointments',
    component: AppointmentsComponent,
  },
  {
    path: 'newsfeed',
    component: FeedComponent,
  },
  {
    path: 'patients',
    component: PatientTableComponent,
  },
  {
    path: 'bloodbank',
    component: AllComponent,
  },
  {
    path: 'blood-request',
    component: DoctorRequestsComponent,
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
    path: 'urgentBloodRequest/create',
    component: UrgentBloodRequestComponent,
  },
  {
    path: 'vacation-requests/doctor',
    component: VacationRequestComponent,
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
  {
    path: 'vacation-requests-display',
    component: VacationRequestsComponent,
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
  },
  {
    path: 'reconsider-blood-request',
    component: ReconsiderBloodRequestComponent,
  },
  {
    path: 'bloodExpenditure/create',
    component: BloodExpenditureComponent,
  },
  {
    path: 'schedule-consilium',
    component: ScheduleConsiliumComponent,
  },
  {
    path: 'consiliums',
    component: AllConsiliumsComponent,
  },
  {
    path: 'vacation-requests/doctor/create',
    component: CreateRequestFormComponent,
  },
  {
    path: 'show-tenders',
    component: ShowTendersComponent,
  },
  {
    path: 'create-tender',
    component: CreateTenderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
