import { Injectable } from '@angular/core';
import { BloodUnit } from 'src/app/medical-treatment/interface/BloodUnit';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BloodStorageService {
  constructor(private http: HttpClient) {}

  public GetBloodUnits(): Observable<BloodUnit[]> {
    return this.http.get<BloodUnit[]>('http://localhost:16177/api/BloodUnit');
  }
}
