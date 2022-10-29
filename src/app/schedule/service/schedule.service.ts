import { RecommendedDTO } from '../interface/RecommendedDTO';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Appointment } from '../interface/Appointment';
import { ReschedulingAppointmentDTO } from '../interface/ReschedulingAppointmentDTO';
import { ScheduleAppointmentDTO } from '../interface/ScheduleAppointmentDTO';

@Injectable({
  providedIn: 'root',
})
<<<<<<< HEAD:src/app/schedule/service/schedule.service.ts
export class ScheduleService {

=======
export class AppointmentService {
>>>>>>> develop:src/app/doctor/service/appointment.service.ts
  private apiServerUrl = environment.apiAppointmentUrl;

  constructor(private http: HttpClient) {}

  public scheduleAppointment(
    appointment: ScheduleAppointmentDTO
  ): Observable<Appointment> {
    return this.http.post<Appointment>(`${this.apiServerUrl}`, appointment);
  }

<<<<<<< HEAD:src/app/schedule/service/schedule.service.ts
  public rescheduleAppointment(appointment: ReschedulingAppointmentDTO): Observable<Appointment> {
    return this.http.put<Appointment>(`${this.apiServerUrl}`, appointment);
=======
  public rescheduleAppointment(
    appointmentId: number,
    appointment: ReschedulingAppointmentDTO
  ): Observable<Appointment> {
    return this.http.put<Appointment>(
      `${this.apiServerUrl}/${appointmentId}`,
      appointment
    );
>>>>>>> develop:src/app/doctor/service/appointment.service.ts
  }

  public getAppointment(appointmentId: number): Observable<Appointment> {
    return this.http.get<Appointment>(`${this.apiServerUrl}/${appointmentId}`);
  }

  public deleteAppointment(appointmentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/${appointmentId}`);
  }

  public getAllAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiServerUrl}/all`);
  }

  public getAllRecommended(recommendedDto: RecommendedDTO): Observable<Date[]> {
    return this.http.get<Date[]>(`${this.apiServerUrl}/recommended`);
  }
}
