import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BloodType } from 'src/app/blood-bank/model/blood-type.model';
import { BloodRequest } from '../interface/blood-request';
import { BloodRequestService } from '../services/blood-request.service';

@Component({
  selector: 'app-blood-request-view',
  templateUrl: './blood-request-view.component.html',
  styleUrls: ['./blood-request-view.component.scss'],
})
export class BloodRequestViewComponent implements OnInit {
  STATUS: string;

  public dataSource = new MatTableDataSource<BloodRequest>();
  public displayedColumns = ['doctor', 'bloodType', 'amount', 'date', 'status'];
  public bloodRequests: BloodRequest[] = [];
  constructor(private bservice: BloodRequestService, private router: Router) {}

  ngOnInit(): void {
    this.STATUS = 'PENDING';
    this.bservice.getBloodRequest().subscribe((res) => {
      this.bloodRequests = res;
      this.dataSource.data = this.bloodRequests;
    });
  }

  public makeAccepted(id: number) {
    this.bservice.MakeAccepted(id).subscribe((res) => {
      this.STATUS = 'ACCEPTED';
      this.bservice.getAccepted().subscribe((res) => {
        this.bloodRequests = res;
        this.dataSource.data = this.bloodRequests;
      });
    });
  }

  public makeDeclined(id: number) {
    this.bservice.MakeDeclined(id).subscribe((res) => {
      this.STATUS = 'DECLINED';
      this.bservice.getDeclined().subscribe((res) => {
        this.bloodRequests = res;
        this.dataSource.data = this.bloodRequests;
      });
    });
  }
}
