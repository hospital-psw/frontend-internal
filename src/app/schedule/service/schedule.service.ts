import { Consilium } from './../interface/Consilium';
import { ScheduleConsilium } from './../interface/ScheduleConsilium';
import { RecommendedDatesDTO } from './../interface/RecommendedDatesDTO';
import { RecommendedDTO } from '../interface/RecommendedDTO';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Appointment } from '../interface/Appointment';
import { ReschedulingAppointmentDTO } from '../interface/ReschedulingAppointmentDTO';
import { ScheduleAppointmentDTO } from '../interface/ScheduleAppointmentDTO';
import { WorkHours } from '../interface/WorkHours';
import { DisplayConsiliumDto } from '../interface/DisplayConsiliumDto';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  private apiAppointmentUrl = environment.apiAppointmentUrl;
  private apiConsiliumUrl = environment.apiConsiliumUrl;
  private apiDoctorUrl = environment.apiDoctorUrl;

  constructor(private http: HttpClient) {}

  public scheduleAppointment(
    appointment: ScheduleAppointmentDTO
  ): Observable<Appointment> {
    return this.http.post<Appointment>(
      `${this.apiAppointmentUrl}/create`,
      appointment
    );
  }

  public rescheduleAppointment(
    appointment: ReschedulingAppointmentDTO
  ): Observable<Appointment> {
    return this.http.put<Appointment>(`${this.apiAppointmentUrl}`, appointment);
  }

  public getAppointment(appointmentId: number): Observable<Appointment> {
    return this.http.get<Appointment>(
      `${this.apiAppointmentUrl}/${appointmentId}`
    );
  }

  public deleteAppointment(appointmentId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiAppointmentUrl}/cancel/${appointmentId}`
    );
  }

  //???
  public getAllAppointments(doctorId: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(
      `${this.apiAppointmentUrl}/doctor/${doctorId}`
    );
  }

  public getDoctorsWorkHours(doctorId: number): Observable<WorkHours> {
    return this.http.get<WorkHours>(
      `${this.apiDoctorUrl}/work-hours/${doctorId}`
    );
  }

  public getAllRecommended(
    recommendedDto: RecommendedDTO
  ): Observable<RecommendedDatesDTO[]> {
    return this.http.post<RecommendedDatesDTO[]>(
      `${this.apiAppointmentUrl}/recommend`,
      recommendedDto
    );
  }

  public scheduleConsilium(
    scheduleConsiliumDto: ScheduleConsilium
  ): Observable<Consilium> {
    return this.http.post<Consilium>(
      `${this.apiConsiliumUrl}`,
      scheduleConsiliumDto
    );
  }

  public getAllConsiliumsByDoctorId(doctorId: number){
    return this.http.get<DisplayConsiliumDto[]>(
      `${this.apiConsiliumUrl}/doctor/${doctorId}`
    );
  }
}
