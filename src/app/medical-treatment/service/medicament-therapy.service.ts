import { MedicamentTherapy } from './../interface/MedicamentTherapy';
import { Observable } from 'rxjs';
import { CreateMedicamentTherapy } from './../../schedule/interface/CreateMedicamentTherapy';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MedicamentTherapyService {
  private apiServerUrl = environment.apiMedicamentTherapy;

  constructor(private http: HttpClient) {}

  public createMedicamentTherapy(
    medicamentTherapy: CreateMedicamentTherapy
  ): Observable<MedicamentTherapy> {
    return this.http.post<MedicamentTherapy>(
      `${this.apiServerUrl}`,
      medicamentTherapy
    );
  }

  public getTherapy(id: number): Observable<MedicamentTherapy> {
    return this.http.get<MedicamentTherapy>(`${this.apiServerUrl}/${id}`);
  }
  public getTherapies(): Observable<MedicamentTherapy[]> {
    return this.http.get<MedicamentTherapy[]>(`${this.apiServerUrl}/all`);
  }
}
