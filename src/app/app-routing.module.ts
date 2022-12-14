import { ApplicationMainComponent } from './application-main/application-main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login/components/login-page/login-page.component';
import { UrgentBloodRequestComponent } from './BloodManagment/UrgentBloodRequest/urgent-blood-request/urgent-blood-request.component';
import { AnamnesesPdfComponent } from './medical-treatment/anamneses_pdf/anamneses-pdf/anamneses-pdf.component';
import { CreateTenderComponent } from './tenders/create-tender/create-tender.component';
import { BlockPatientsViewComponent } from './Manager/block-patients/block-patients-view/block-patients-view.component';
import { BloodExpenditureComponent } from './BloodManagment/BloodExpenditure/blood-expenditure/blood-expenditure.component';
import { ReconsiderBloodRequestComponent } from './Manager/blood-request/reconsider-blood-request/reconsider-blood-request/reconsider-blood-request.component';
import { StatisticsComponent } from './Statistics/statistics/Components/statistics/statistics.component';
import { VacationRequestsComponent } from './Manager/view-vacation-requests/vacation-requests.component';
import { ShowTendersComponent } from './tenders/show-tenders/show-tenders.component';
import { BaseComponentComponent } from './medical-treatment/show-treatments/base-component/base-component.component';
import { TreatmentResolver } from './medical-treatment/resolver/treatmentResolver';
import { TreatmentViewComponent } from './medical-treatment/treatment/treatment-view/treatment-view.component';
import { VacationRequestComponent } from './vacation-request/vacation-request/vacation-request.component';
import { DoctorRequestsComponent } from './BloodManagment/doctor-requests/doctor-requests.component';
import { BloodAcquisitionComponent } from './BloodManagment/BloodAcquisition/blood-acquisition/blood-acquisition.component';
import { SchedulingComponent } from './schedule/scheduling/scheduling.component';
import { FeedbackViewComponent } from './Manager/feedback/feedback-view/feedback-view.component';
import { ReschedulingAppointmentComponent } from './schedule/rescheduling/rescheduling-appointment/rescheduling-appointment.component';
import { ViewRoomsComponent } from './Manager/view-rooms/view-rooms.component';
import { AppointmentResolver } from './schedule/resolver/appointment-resolver';
import { PatientTableComponent } from './schedule/patients/patient-table/patient-table.component';

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
    path: 'appointments/anamneses/:id',
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
