import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IVacationRequest } from '../Model/VacationRequest';
import { VacationRequestsService } from '../service/vacation-requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './vacation-requests.component.html',
  styleUrls: ['./vacation-requests.component.scss']
})
export class VacationRequestsComponent {

  sub: Subscription

  constructor(private vacationRequestsService : VacationRequestsService) {

  }

  vacationRequests : IVacationRequest[] = []

  ngOnInit(): void {
    this.vacationRequestsService.getVacationRequests().subscribe((data) => this.vacationRequests = data);
  }

  ngOnDestroy(){
    this.sub.unsubscribe()
  }

  refresh(){
    this.vacationRequestsService.getVacationRequests().subscribe((data) => this.vacationRequests = data);
  }
}
