import { PatientTableComponent } from './doctor/patients/patient-table/patient-table.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentResolver } from './doctor/resolver/appointment-resolver';
import { AppointmentsComponent } from './doctor/appointment/show-all/appointments/appointments.component';

const routes: Routes = [
  {
    path: 'appointments',
    component: AppointmentsComponent,
  },
  {
    path: 'patients',
    component: PatientTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
