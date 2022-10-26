import { Appointment } from './../interface/Appointment';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { AppointmentService } from 'src/app/doctor/service/appointment.service';

@Injectable({
  providedIn: 'root',
})
export class AppointmentResolver implements Resolve<Appointment> {
  constructor(private appointmentService: AppointmentService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Appointment> {
    console.log('Called Get Appointment in resolver...', route);
    //let appointmentId = parseInt(route.paramMap.get("id"));
    return this.appointmentService.getAppointment(1);
  }
}