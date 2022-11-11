import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IVacationRequest } from '../Model/VacationRequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VacationRequestsService {
  constructor(private http: HttpClient) {}

  getVacationRequests() : Observable<IVacationRequest[]> {
    return this.http.get<IVacationRequest[]>(
      `http://localhost:16177/api/VacationRequests/getAllPending`
    );
  }
}
