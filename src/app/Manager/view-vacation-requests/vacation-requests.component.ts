import { Component } from '@angular/core';
import { IVacationRequest } from '../Model/VacationRequest';
import { VacationRequestsService } from '../service/vacation-requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './vacation-requests.component.html',
  styleUrls: ['./vacation-requests.component.scss']
})
export class VacationRequestsComponent {
  constructor(private vacationRequestsService : VacationRequestsService) {}

  vacationRequests : IVacationRequest[] = []

  ngOnInit(): void {
    this.vacationRequests = this.vacationRequestsService.getVacationRequests();
  }

}
