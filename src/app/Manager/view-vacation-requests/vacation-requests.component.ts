import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IVacationRequest } from '../Model/VacationRequest';
import { VacationRequestsService } from '../service/vacation-requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './vacation-requests.component.html',
  styleUrls: ['./vacation-requests.component.scss'],
})
export class VacationRequestsComponent implements OnInit {
  constructor(private vacationRequestsService: VacationRequestsService) {}

  vacationRequests: IVacationRequest[] = [];

  ngOnInit(): void {
    this.vacationRequestsService
      .getVacationRequests()
      .subscribe((data) => (this.vacationRequests = data));
  }

  refresh() {
    this.vacationRequestsService
      .getVacationRequests()
      .subscribe((data) => (this.vacationRequests = data));
  }
}
