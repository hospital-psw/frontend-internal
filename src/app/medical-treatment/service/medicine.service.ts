import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Medicament } from '../interface/Medicament';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MedicineService {
  private apiServerUrl = environment.apiMedicine;

  constructor(private http: HttpClient) {}

  public getMedicines(): Observable<Medicament[]> {
    return this.http.get<Medicament[]>(`${this.apiServerUrl}`);
  }

  public getAcceptable(patientId: number): Observable<Medicament[]> {
    return this.http.get<Medicament[]>(
      `${this.apiServerUrl}/acceptable/${patientId}`
    );
  }
}
