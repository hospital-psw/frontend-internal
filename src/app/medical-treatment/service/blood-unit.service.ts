import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BloodUnit } from './../interface/BloodUnit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BloodUnitService {
  private apiServerUrl = environment.apiBloodUnit;

  constructor(private http: HttpClient) {}

  public getByBloodType(bloodType: number): Observable<BloodUnit> {
    return this.http.get<BloodUnit>(`${this.apiServerUrl}/get/${bloodType}`);
  }
}
