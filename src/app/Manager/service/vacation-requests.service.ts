import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IVacationRequest } from '../Model/VacationRequest';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VacationRequestsService {
  constructor(private http: HttpClient) {}

  getVacationRequests(): Observable<IVacationRequest[]> {
    return this.http.get<IVacationRequest[]>(
      `${environment.apiVacationRequestUrl}/getAllPending`
    );
  }

  acceptVacationRequest(id: number): Observable<any> {
    return this.http.patch<any>(
      `${environment.apiVacationRequestUrl}/handle`,
      { Id: id, Status: 1 }
    );
  }

  declineVacationRequest(id: number, managerComment: string) {
    return this.http.patch<any>(
      `${environment.apiVacationRequestUrl}/handle`,
      { Id: id, Status: 2, ManagerComment: managerComment }
    );
  }
}
