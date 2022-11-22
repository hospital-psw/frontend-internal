import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewVacationRequestDTO } from '../model/enum/new-vacation-request-dto';
import { Observable } from 'rxjs';
import { VacationRequest } from '../model/interface/vacation-request';

@Injectable({
  providedIn: 'root',
})
export class VacationRequestService {
  private apiServerUrl = environment.apiVacationRequestUrl;
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  public createVacationRequest(
    vacationRequest: NewVacationRequestDTO
  ): Observable<VacationRequest> {
    return this.http.post<VacationRequest>(
      `${this.apiServerUrl}`,
      vacationRequest
    );
  }

  public getAllVacationRequests(doctorId: number): Observable<VacationRequest[]>{
    return this.http.get<VacationRequest[]>(
      `${this.apiServerUrl}/${doctorId}`,{
        headers: this.headers
      }
    )
  }

  public deleteVacationRequest(vacationRequestId: number): Observable<void>{
    return this.http.delete<void>(
      `${this.apiServerUrl}/delete/${vacationRequestId}`
    )
  }
}
