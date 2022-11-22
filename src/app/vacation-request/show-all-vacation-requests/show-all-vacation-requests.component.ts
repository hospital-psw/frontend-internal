import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { VacationRequest } from '../model/interface/vacation-request';
import { VacationRequestService } from '../service/vacation-request.service';
import { ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';
import { VacationRequestStatus } from '../model/enum/vacation-request-status';

@Component({
  selector: 'app-show-all-vacation-requests',
  templateUrl: './show-all-vacation-requests.component.html',
  styleUrls: ['./show-all-vacation-requests.component.scss'],
})
export class ShowAllVacationRequestsComponent implements OnInit {
  public dataSource = new MatTableDataSource<VacationRequest>();
  public displayedColumns = [
    'from',
    'to',
    'status',
    'urgency',
    'comment',
    'manager comment',
  ];
  public vacationRequests: VacationRequest[] = [];
  public disableDeleteButton: boolean = true;
  vacationRequestStatus: VacationRequestStatus[];
  public selected: VacationRequest;
  constructor(
    private vacationRequestService: VacationRequestService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.vacationRequestService.getAllVacationRequests(8).subscribe((res) => {
      this.vacationRequests = res;
      this.dataSource.data = this.vacationRequests;
    });
    this.vacationRequestStatus = Object.values(VacationRequestStatus);
  }

  public createVacationRequest() {
    this.router.navigate(['/vacation-requests/doctor/create']);
  }

  public setSelectedItem(vacationRequest: VacationRequest) {
    this.selected = {
      id: vacationRequest.id,
      from: vacationRequest.from,
      to: vacationRequest.to,
      status: vacationRequest.status,
      urgent: vacationRequest.urgent,
      comment: vacationRequest.comment,
      managerComent: vacationRequest.managerComent,
      doctor: vacationRequest.doctor,
    };
    if (
      vacationRequest.status !==
      (this.vacationRequestStatus.indexOf(VacationRequestStatus.WAITING) as any)
    ) {
      this.disableDeleteButton = true;
    } else {
      this.disableDeleteButton = false;
    }
  }

  public deleteSelected(): void {
    this.vacationRequestService
      .deleteVacationRequest(this.selected.id)
      .subscribe((data) => {
        this.toaster.success('You successfuly deleted this request!');
        this.ngOnInit()
      });
  }
}
