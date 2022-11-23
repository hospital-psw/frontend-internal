import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { NewVacationRequestDTO } from '../model/enum/new-vacation-request-dto';
import { Observable } from 'rxjs';
import { VacationRequest } from '../model/interface/vacation-request';

@Injectable({
  providedIn: 'root',
})
export class VacationRequestService {
  private apiServerUrl = environment.apiVacationRequestUrl;

  constructor(private http: HttpClient) {}

  public createVacationRequest(
    vacationRequest: NewVacationRequestDTO
  ): Observable<VacationRequest> {
    return this.http.post<VacationRequest>(
      `${this.apiServerUrl}`,
      vacationRequest
    );
  }

  public getAllVacationRequests(
    doctorId: number
  ): Observable<VacationRequest[]> {
    return this.http.get<VacationRequest[]>(
      `${this.apiServerUrl}/${doctorId}`
    );
  }

  public deleteVacationRequest(vacationRequestId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/delete/${vacationRequestId}`
    );
  }
}
