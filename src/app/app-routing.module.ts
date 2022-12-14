import { ApplicationMainComponent } from './application-main/application-main.component';
import { AllConsiliumsComponent } from './schedule/consilium/all-consiliums/all-consiliums.component';
import { ScheduleConsiliumComponent } from './schedule/consilium/schedule-consilium/main-component/schedule-consilium.component';
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
import { StatisticsComponent } from './Statistics/statistics/Components/statistics/statistics.component';
import { ReconsiderBloodRequestComponent } from './Manager/blood-request/reconsider-blood-request/reconsider-blood-request/reconsider-blood-request.component';
import { ShowAllVacationRequestsComponent } from './vacation-request/show-all-vacation-requests/show-all-vacation-requests.component';
import { BloodAcquisitionComponent } from './BloodManagment/BloodAcquisition/blood-acquisition/blood-acquisition.component';
import { DoctorRequestsComponent } from './BloodManagment/doctor-requests/doctor-requests.component';
import { BloodExpenditureComponent } from './BloodManagment/BloodExpenditure/blood-expenditure/blood-expenditure.component';
import { ShowTendersComponent } from './tenders/show-tenders/show-tenders.component';
import { LoginPageComponent } from './login/components/login-page/login-page.component';
import { UrgentBloodRequestComponent } from './BloodManagment/UrgentBloodRequest/urgent-blood-request/urgent-blood-request.component';
import { AnamnesesPdfComponent } from './medical-treatment/anamneses_pdf/anamneses-pdf/anamneses-pdf.component';
import { CreateTenderComponent } from './tenders/create-tender/create-tender.component';

const routes: Routes = [
  {
    path: 'app',
    component: ApplicationMainComponent,
    loadChildren: () =>
      import('./application-main/user-routing/user-routing.module').then(
        (x) => x.UserRoutingModule
      ),
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
    path: 'show-tenders',
    component: ShowTendersComponent,
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
    path:'appointments/anamneses/:id',
    component: AnamnesesPdfComponent,
  },
  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: 'create-tender',
    component: CreateTenderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
