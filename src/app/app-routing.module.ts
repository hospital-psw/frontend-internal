import { ReschedulingAppointmentComponent } from './schedule/rescheduling/rescheduling-appointment/rescheduling-appointment.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentResolver } from './schedule/resolver/appointment-resolver';

const routes: Routes = [
  {
    path: 'reschedule-appointment/:id',
    component: ReschedulingAppointmentComponent,
    resolve: {
      appointment: AppointmentResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
