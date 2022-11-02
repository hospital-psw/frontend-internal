import { RecommendedDatesDTO } from './../interface/RecommendedDatesDTO';
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
export class ScheduleService {
  private apiServerUrl = environment.apiAppointmentUrl;

  constructor(private http: HttpClient) {}

  public scheduleAppointment(
    appointment: ScheduleAppointmentDTO
  ): Observable<Appointment> {
    return this.http.post<Appointment>(`${this.apiServerUrl}`, appointment);
  }

  public rescheduleAppointment(
    appointment: ReschedulingAppointmentDTO
  ): Observable<Appointment> {
    return this.http.put<Appointment>(`${this.apiServerUrl}`, appointment);
  }

  public getAppointment(appointmentId: number): Observable<Appointment> {
    return this.http.get<Appointment>(`${this.apiServerUrl}/${appointmentId}`);
  }

  public deleteAppointment(appointmentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/cancel/${appointmentId}`);
  }

  public getAllAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiServerUrl}/doctor/8`);
  }

  public getAllRecommended(
    recommendedDto: RecommendedDTO
  ): Observable<RecommendedDatesDTO[]> {
    return this.http.post<RecommendedDatesDTO[]>(
      `${this.apiServerUrl}/recommend`,
      recommendedDto
    );
  }
}
