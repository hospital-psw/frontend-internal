import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IVacationRequest } from '../Model/VacationRequest';
<<<<<<< HEAD
import { Observable } from 'rxjs';
=======
>>>>>>> 74a2ecb (Implemented UI for showing requests and modal dialog for request rejection)

@Injectable({
  providedIn: 'root',
})
export class VacationRequestsService {
  constructor(private http: HttpClient) {}

<<<<<<< HEAD
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
=======

  vacationRequests : IVacationRequest[] = [];

  getVacationRequests() : IVacationRequest[] {
    /*return this.http.get<IVacationRequest[]>(
      `http://localhost:16177/api/map/getVacationRequests`
    );*/
    this.vacationRequests.push({doctor: {id: 1, firstName: "Ana", lastName: "Vulin", "email": "lala"}, from: new Date(), to: new Date(), urgent: true, status: "pending", "comment": "aaaaaa", "managerComment": ""});
    return this.vacationRequests;
>>>>>>> 74a2ecb (Implemented UI for showing requests and modal dialog for request rejection)
  }
}
