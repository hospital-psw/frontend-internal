import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateExpenditureDTO } from '../interface/CreateExpenditureDTO';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BloodExpenditureService {
  private apiServerUrl = environment.apiBloodExpenditure;
  constructor(private http: HttpClient) {}

  public createBloodExpenditure(
    bloodExpenditure: CreateExpenditureDTO
  ): Observable<CreateExpenditureDTO> {
    return this.http.post<CreateExpenditureDTO>(
      `${this.apiServerUrl}`,
      bloodExpenditure
    );
  }
}
