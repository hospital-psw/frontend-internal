import { Component, OnInit, Input } from '@angular/core';
import { IVacationRequest } from '../../Model/VacationRequest';
import { VacationRequestsService } from '../../service/vacation-requests.service';

@Component({
  selector: 'app-reject-request',
  templateUrl: './reject-request-dialog.component.html',
  styleUrls: ['./reject-request-dialog.component.scss'],
})
export class RejectRequestDialogComponent implements OnInit {
  constructor(private vacationRequestService: VacationRequestsService) {}

  ngOnInit(): void {
  }
}
