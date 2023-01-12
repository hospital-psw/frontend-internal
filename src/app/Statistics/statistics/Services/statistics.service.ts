import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DoctorOptionalStatisticDto } from 'src/app/Manager/Model/Dto/DoctorOptionalStatisticDto';
import { RenovationStatisticDto } from 'src/app/Manager/Model/Dto/RenovationStatisticDto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  constructor(private _http: HttpClient) {}

  getStatistics() {
    return this._http.get(`${environment.apiStatistics}/getStats`);
  }

  getVacationStatistics(doctorId: number) {
    return this._http.get(
      `${environment.apiStatistics}/getVacationStats/${doctorId}`
    );
  }

  getAverageRenovationSchedulingDurationByGroups() {
    return this._http.get(
      `${environment.apiStatistics}/getRenovationStats/duration/groups`
    );
  }

  getAverageRenovationSchedulingDuration() {
    return this._http.get(
      `${environment.apiStatistics}/getRenovationStats/duration`
    );
  }

  getDoctorYearlyBookingStatistics(doctorId: number, year: number) {
    return this._http.get(
      `${environment.apiStatistics}/getYearlyDoctorAppointmentsStats/${doctorId}/${year}`
    );
  }

  getDoctorMonthlyBookingStatistics(
    doctorId: number,
    month: number,
    year: number
  ) {
    return this._http.get(
      `${environment.apiStatistics}/stats/doctor/month/${doctorId}/${month}/${year}`
    );
  }

  getNumberOfViewsForEachStep() {
    return this._http.get(
      `${environment.apiStatistics}/getNumberOfViewsForEachStep`
    );
  }

  getNumberOfStepsAccordingToRenovationType() {
    return this._http.get(
      `${environment.apiStatistics}/getNumberOfStepsAccordingToRenovationType`
    );
  }

  getAverageAccordingToRenovationType() {
    return this._http.get(
      `${environment.apiStatistics}/getAverageDurationAccordingToRenovationType`
    );
  }
  getAverageRenovationSteps() {
    return this._http.get(
      `${environment.apiStatistics}/getAverageNumberOfRenovationSteps`
    );
  }
  getMoneyPerMonth(year: number) {
    return this._http.get<number[]>(
      `http://localhost:16177/api/tender/money/${year}`
    );
  }
  getTimeSpentPerStep() {
    return this._http.get<RenovationStatisticDto[]>(
      `${environment.apiStatistics}/getTimeSpentPerStep`
    );
  }

  getDoctorOptionalBookingStatistics(dto: DoctorOptionalStatisticDto) {
    return this._http.post(
      `${environment.apiStatistics}/getOptionalDoctorStats`,
      dto
    );
  }
  getAverageAppointmentSchedulingDuration() {
    return this._http.get(
      `${environment.apiAppointmentSchedulingEvent}/getAverageTimeSpent`
    );
  }
  getNumOfTimesSpentOnEachStepOfSchedulingAppointment() {
    return this._http.get(
      `${environment.apiAppointmentSchedulingEvent}/getTimesOnSteps`
    );
  }
  GetAverageTimePerStep() {
    return this._http.get(
      `${environment.apiAppointmentSchedulingEvent}/getAverageTimePerStep`
    );
  }
  getNumberOfStepsByAgeGroup(){
    return this._http.get(
      `${environment.apiAppointmentSchedulingEvent}/getNumberOfStepsToCreateAppointmentByAgeGroup`
    );
  }
  getAverageNumberOfStepsForSchedulingAppointment() {
    return this._http.get(
      `${environment.apiAppointmentSchedulingEvent}/getAverageSteps`
    );
  }
  getTimeToCreateAppointmentByAge() {
    return this._http.get(
      `${environment.apiAppointmentSchedulingEvent}/getTimeToCreateAppointmentByAgeGroup`
    );
  }
}
