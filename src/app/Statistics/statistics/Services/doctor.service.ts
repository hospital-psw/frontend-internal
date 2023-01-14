import { Doctor } from 'src/app/schedule/interface/Doctor';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  private apiServerUrl = environment.apiDoctorUrl;

  constructor(private _http: HttpClient) {}

  getDoctors() {
    return this._http.get(`${this.apiServerUrl}/all`);
  }

  getSpecializationsOfDoctorsInSameShift(
    workHourId: number
  ): Observable<number[]> {
    return this._http.get<number[]>(
      `${this.apiServerUrl}/specializations/${workHourId}`
    );
  }

  getDoctorsInSameShift(workHourId: number): Observable<Doctor[]> {
    return this._http.get<Doctor[]>(
      `${this.apiServerUrl}/same-shift/${workHourId}`
    );
  }
}
