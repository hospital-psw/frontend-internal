import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IVacationRequest } from '../Model/VacationRequest';

@Injectable({
  providedIn: 'root',
})
export class VacationRequestsService {
  constructor(private http: HttpClient) {}


  vacationRequests : IVacationRequest[] = [];

  getVacationRequests() : IVacationRequest[] {
    /*return this.http.get<IVacationRequest[]>(
      `http://localhost:16177/api/map/getVacationRequests`
    );*/
    this.vacationRequests.push({doctor: {id: 1, firstName: "Ana", lastName: "Vulin", "email": "lala"}, from: new Date(), to: new Date(), urgent: false, status: "pending", "comment": "aaaaaa", "managerComment": ""});
    return this.vacationRequests;
  }
}
