import { BloodUnitTherapy } from './../interface/BloodUnitTherapy';
import { Observable } from 'rxjs';
import { CreateBloodUnitTherapy } from './../../schedule/interface/CreateBloodUnitTherapy';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BloodunitTherapyService {
  private apiServerUrl = environment.apiBloodUnitTherapy;

  constructor(private http: HttpClient) { }

  public createBloodUnitTherapy(
    bloodUnitTherapy: CreateBloodUnitTherapy
  ): Observable<BloodUnitTherapy> {
    return this.http.post<BloodUnitTherapy>(
      `${this.apiServerUrl}`,
      bloodUnitTherapy
    );
  }

  public getTherapy(id: number): Observable<BloodUnitTherapy> {
    return this.http.get<BloodUnitTherapy>(`${this.apiServerUrl}/${id}`);
  }
  public getTherapies(): Observable<BloodUnitTherapy[]> {
    return this.http.get<BloodUnitTherapy[]>(`${this.apiServerUrl}/all`);
  }
}
