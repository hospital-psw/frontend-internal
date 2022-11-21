import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { VacationRequest } from '../model/interface/vacation-request';
import { VacationRequestService } from '../service/vacation-request.service';
import { ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  public dataSource = new MatTableDataSource<VacationRequest>();
  public displayedColumns = [
    'from',
    'to',
    'status',
    'urgency',
    'comment',
    'manager comment'
  ]
  public vacationRequests: VacationRequest[] = []
  constructor(
    private vacationRequestService: VacationRequestService,
    private router: Router,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
    this.vacationRequestService.getAllVacationRequests(8).subscribe(
      (res) => {
        this.vacationRequests = res;
        this.dataSource.data = this.vacationRequests 
      }
    )
  }

  public createVacationRequest(){
    this.router.navigate(['/vacation-requests/create'])
  }

}
