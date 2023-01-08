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
import { ExaminationStepperComponent } from 'src/app/examinations/examination-stepper/examination-stepper.component';
import { ShowTendersComponent } from 'src/app/tenders/show-tenders/show-tenders.component';
import { CreateTenderComponent } from 'src/app/tenders/create-tender/create-tender.component';
import { BlockPatientsViewComponent } from 'src/app/Manager/block-patients/block-patients-view/block-patients-view.component';
import { AnamnesesPdfComponent } from 'src/app/medical-treatment/anamneses_pdf/anamneses-pdf/anamneses-pdf.component';
import { DetailComponent } from 'src/app/blood-bank/detail/detail.component';
import { UpdateComponent } from 'src/app/blood-bank/update/update.component';
import { CreateComponent } from 'src/app/blood-bank/create/create.component';
import { BloodUnitsOverviewComponent } from 'src/app/BloodManagment/BloodUnitsOverview/blood-units-overview/blood-units-overview.component';
import { RenovationStatisticsComponent } from 'src/app/Statistics/statistics/Components/renovation-statistics/renovation-statistics.component';
import { BaseComponent } from 'src/app/examinations/anamnesis-perscriptions-review/base/base.component';

const routes: Routes = [
  {
    path: 'appointments',
    title: 'Appointments | Care Connect',
    component: AppointmentsComponent,
  },
  {
    path: 'newsfeed',
    title: 'Newsfeed | Care Connect',
    component: FeedComponent,
  },
  {
    path: 'patients',
    title: 'Patients | Care Connect',
    component: PatientTableComponent,
  },
  {
    path: 'bloodbank',
    title: 'Blood Bank | Care Connect',
    component: AllComponent,
  },
  {
    path: 'blood-request',
    title: 'Blood Acquisitions | Care Connect',
    component: DoctorRequestsComponent,
  },
  {
    path: 'display',
    title: 'Rooms | Care Conncect',
    component: ViewRoomsComponent,
  },
  {
    path: 'reschedule-appointment/:id',
    title: 'Appointment Rescheduling | Care Connect',
    component: ReschedulingAppointmentComponent,
    resolve: {
      appointment: AppointmentResolver,
    },
  },
  {
    path: 'feedback',
    title: 'Feedbacks | Care Connect',
    component: FeedbackViewComponent,
  },
  {
    path: 'appointments/scheduling',
    title: 'Appointment Scheduling | Care Connect',
    component: SchedulingComponent,
  },
  {
    path: 'bloodAcquisition/create',
    title: 'Blood Acquisition Create | Care Connect',
    component: BloodAcquisitionComponent,
  },
  {
    path: 'urgentBloodRequest/create',
    title: 'Urgent Blood Requests | Care Connect',
    component: UrgentBloodRequestComponent,
  },
  {
    path: 'vacation-requests/doctor',
    title: 'My Vacation Requests | Care Connect',
    component: VacationRequestComponent,
  },
  {
    path: 'treatment/:id',
    component: TreatmentViewComponent,
    title: 'Stationary treatment | Care Connect',
    resolve: {
      treatment: TreatmentResolver,
    },
  },
  {
    path: 'show-treatments',
    title: 'Treatments | Care Connect',
    component: BaseComponentComponent,
  },
  {
    path: 'vacation-requests-display',
    title: 'Vacation Requests | Care Connect',
    component: VacationRequestsComponent,
  },
  {
    path: 'statistics',
    title: 'Statistics | Care Connect',
    component: StatisticsComponent,
  },
  {
    path: 'reconsider-blood-request',
    title: 'Reconsideration | Care Connect',
    component: ReconsiderBloodRequestComponent,
  },
  {
    path: 'bloodExpenditure/create',
    title: 'Blood Expenditures | Care Connect',
    component: BloodExpenditureComponent,
  },
  {
    path: 'schedule-consilium',
    title: 'Consilium Scheduling | Care Connect',
    component: ScheduleConsiliumComponent,
  },
  {
    path: 'consiliums',
    title: 'Consiliums | Care Connect',
    component: AllConsiliumsComponent,
  },
  {
    path: 'vacation-requests/doctor/create',
    title: 'Vacation Request Creation | Care Connect',
    component: CreateRequestFormComponent,
  },
  {
    path: 'examination/:id',
    title: 'Examination | Care Connect',
    resolve: {
      appointment: AppointmentResolver,
    },
    component: ExaminationStepperComponent,
  },
  {
    path: 'show-tenders',
    title: 'Tenders | Care Connect',
    component: ShowTendersComponent,
  },
  {
    path: 'create-tender',
    title: 'New Tender | Care Connect',
    component: CreateTenderComponent,
  },
  {
    path: 'blockpatients',
    title: 'Block Patient | Care Connect',
    component: BlockPatientsViewComponent,
  },
  {
    path: 'anamneses-pdf/:id',
    title: 'PDF Generation | Care Connect',
    component: AnamnesesPdfComponent,
  },
  {
    path: 'bloodbank/:id/detail',
    title: 'Blood Bank Details | Care Connect',
    component: DetailComponent,
  },
  {
    path: 'bloodbank/:id/update',
    title: 'Blood Bank Update | Care Connect',
    component: UpdateComponent,
  },
  {
    path: 'bloodbank/add',
    title: 'Add New Blood Bank | Care Connect',
    component: CreateComponent,
  },
  {
    path: 'blood-storage',
    component: BloodUnitsOverviewComponent,
  },
  {
    path: 'renovation/statistics',
    title: 'Renovation Statistics | Care Connect',
    component: RenovationStatisticsComponent,
  },
  {
    path: 'anamnesis-perscriptions-review',
    title: 'Search Engine | Care Connect',
    component: BaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
