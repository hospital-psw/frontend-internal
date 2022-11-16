import { PatientRelease } from './../interface/PatientRelease';
import { MedicalTreatment } from './../interface/MedicalTreatment';
import { Observable } from 'rxjs';
import { CreateMedicalTreatment } from './../interface/CreateMedicalTreatment';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MedicalTreatmentService {
  private apiServerUrl = environment.apiMedicalTreatment;

  constructor(private http: HttpClient) { }

  public createMedicalTreatment(
    medicalTreatment: CreateMedicalTreatment
  ): Observable<MedicalTreatment> {
    return this.http.post<MedicalTreatment>(
      `${this.apiServerUrl}`,
      medicalTreatment
    );
  }

  public releasePatient(
    patientRelease: PatientRelease
  ): Observable<MedicalTreatment> {
    return this.http.patch<MedicalTreatment>(
      `${this.apiServerUrl}`,
      patientRelease
    );
  }

  public getTreatment(id: number): Observable<MedicalTreatment> {
    return this.http.get<MedicalTreatment>(`${this.apiServerUrl}/${id}`);
  }

  public getAll(): Observable<MedicalTreatment[]> {
    return this.http.get<MedicalTreatment[]>(`${this.apiServerUrl}/all`);
  }

  public getActive(): Observable<MedicalTreatment[]> {
    return this.http.get<MedicalTreatment[]>(`${this.apiServerUrl}/active`);
  }

  public getInactive(): Observable<MedicalTreatment[]> {
    return this.http.get<MedicalTreatment[]>(`${this.apiServerUrl}/inactive`);
  }
}
