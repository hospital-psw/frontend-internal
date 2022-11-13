import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BloodType } from 'src/app/blood-bank/model/blood-type.model';
import { BloodRequest } from '../interface/blood-request';

const ELEMENT_DATA: BloodRequest[] = [
  {doctor: 'pera', bloodType: BloodType.A_NEGATIVE, amount: 5, requestId: 5, message: 'aa', status: 6},
  {doctor: 'mika', bloodType: BloodType.B_POSITIVE, amount: 4, requestId: 6, message: 'bb', status: 7},
  {doctor: 'ana', bloodType: BloodType.AB_NEGATIVE, amount: 5, requestId: 7, message: 'cc', status: 54},
];

@Component({
  selector: 'app-blood-request-view',
  templateUrl: './blood-request-view.component.html',
  styleUrls: ['./blood-request-view.component.scss']
})
export class BloodRequestViewComponent implements OnInit {

  //public dataSource = new MatTableDataSource<BloodRequest>();
  public dataSource = ELEMENT_DATA;
  public displayedColumns = ['doctor', 'bloodType', 'amount'];
  public bloodRequest: BloodRequest[] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
