import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IVacationRequest } from '../Model/VacationRequest';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class VacationRequestsService {
  constructor(private http: HttpClient) {}

<<<<<<< HEAD

=======
>>>>>>> 84dd73f (small update)
  getVacationRequests(): Observable<IVacationRequest[]> {
    return this.http.get<IVacationRequest[]>(
      `http://localhost:16177/api/VacationRequests/getAllPending`
    );
  }

  acceptVacationRequest(id: number): Observable<any> {
    return this.http.patch<any>(
      `http://localhost:16177/api/VacationRequests/handle`,
      { Id: id, Status: 1 }
    );
  }

  declineVacationRequest(id: number, managerComment: string) {
    return this.http.patch<any>(
      `http://localhost:16177/api/VacationRequests/handle`,
      { Id: id, Status: 2, ManagerComment: managerComment }
    );
  }
}
