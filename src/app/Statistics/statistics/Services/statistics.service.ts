import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  getAverageRenovationSchedulingDuration(){
    return this._http.get(`${environment.apiStatistics}/getRenovationStats/duration`)
  }
  
  getDoctorYearlyBookingStatistics(doctorId: number, year: number){
    return this._http.get(
      `${environment.apiStatistics}/getYearlyDoctorAppointmentsStats/${doctorId}/${year}`
    );
  }

  getDoctorMonthlyBookingStatistics(doctorId: number, month: number, year: number){
    return this._http.get(`${environment.apiStatistics}/stats/doctor/month/${doctorId}/${month}/${year}`)
  }
}
