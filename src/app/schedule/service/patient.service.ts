import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Patient } from '../interface/Patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private apiServerUrl = environment.apiPatientUrl;

  constructor(private http: HttpClient) {}

  getAllPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.apiServerUrl}/all`);
  }
}
