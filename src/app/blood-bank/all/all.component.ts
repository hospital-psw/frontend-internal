import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BloodBank } from '../model/blood-bank.model';
import { BloodBankService } from '../services/blood-bank.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
})
export class AllComponent implements OnInit {
  public dataSource = new MatTableDataSource<BloodBank>();
  public displayedColumns = [
    'name',
    'email',
    'apiUrl',
    'getBloodTypeAvailability',
    'getBloodTypeAndAmountAvailability',
    'updateAndDeleteActions',
  ];
  public bloodBanks: BloodBank[] = [];

  constructor(
    private bloodBankService: BloodBankService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.bloodBankService.getBloodBanks().subscribe(
      (res) => {
        this.bloodBanks = res;
        this.dataSource.data = this.bloodBanks;
      },
      (err) => {
        this.bloodBankService.errorHandling(err);
      }
    );
  }

  public chooseBloodBank(id: number) {
    this.router.navigate(['/app/bloodbank', id]);
  }

  public updateBloodBank(id: number) {
    this.router.navigate(['/app/bloodbank/' + id + '/update']);
  }

  public detailBloodBank(id: number) {
    this.router.navigate(['/app/bloodbank/' + id + '/detail']);
  }

  public deleteBloodBank(id: number) {
    this.bloodBankService.deleteBloodBank(id).subscribe((res) => {
      this.bloodBankService.getBloodBanks().subscribe((res) => {
        this.bloodBanks = res;
        this.dataSource.data = this.bloodBanks;
      });
    });
  }

  public addBloodBank() {
    this.router.navigate(['/app/bloodbank/add']);
  }
}
