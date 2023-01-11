import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { BloodRequest } from 'src/app/Manager/Model/BloodRequest';
import { BloodRequestService } from '../../services/blood-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reconsider-blood-request',
  templateUrl: './reconsider-blood-request.component.html',
  styleUrls: ['./reconsider-blood-request.component.scss'],
})
export class ReconsiderBloodRequestComponent implements OnInit {
  public dataSource = new MatTableDataSource<BloodRequest>();
  public displayedColumns = [
    'doctor',
    'bloodType',
    'amount',
    'date',
    'reason',
    'comment',
    'status',
  ];
  public bloodRequests: BloodRequest[] = [];
  constructor(
    public dialog: MatDialog,
    private bservice: BloodRequestService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bservice.getReconsidering().subscribe((res) => {
      this.bloodRequests = res;
      this.dataSource.data = this.bloodRequests;
    });
  }

  public updateRequest(id: number) {
    this.router.navigate(['/request/' + id + '/update']);
  }

  public editRequest(bloodRequests: BloodRequest) {
    this.bservice.editRequest(bloodRequests).subscribe((res) => {
      this.dataSource.data = this.bloodRequests;
    });
  }



}
