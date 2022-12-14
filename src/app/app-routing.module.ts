import { ApplicationMainComponent } from './application-main/application-main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login/components/login-page/login-page.component';
import { UrgentBloodRequestComponent } from './BloodManagment/UrgentBloodRequest/urgent-blood-request/urgent-blood-request.component';
import { AnamnesesPdfComponent } from './medical-treatment/anamneses_pdf/anamneses-pdf/anamneses-pdf.component';
import { CreateTenderComponent } from './tenders/create-tender/create-tender.component';
import { BlockPatientsViewComponent } from './Manager/block-patients/block-patients-view/block-patients-view.component';

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
