import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BloodBank } from '../model/blood-bank.model';
import { BloodBankService } from '../services/blood-bank.service';
//import { MatSnackBar } from '@angular/material/snack-bar';

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
    private router: Router //private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.bloodBankService.getBloodBanks().subscribe((res) => {
      this.bloodBanks = res;
      this.dataSource.data = this.bloodBanks;
    });
  }

  public chooseBloodBank(id: number) {
    this.router.navigate(['/bloodbank', id]);
  }

  public updateBloodBank(id: number) {
    this.router.navigate(['/bloodbank/' + id + '/update']);
  }

  public detailBloodBank(id: number) {
    this.router.navigate(['/bloodbank/' + id + '/detail']);
  }

  public deleteBloodBank(id: number) {
    //this.snackBar.open('Deleting blood bank, please wait!');
    this.bloodBankService.deleteBloodBank(id).subscribe((res) => {
      this.bloodBankService.getBloodBanks().subscribe((res) => {
        this.bloodBanks = res;
        this.dataSource.data = this.bloodBanks;
        //this.snackBar.open('Blood bank deleted!', 'Dismiss');
      });
    });
  }

  public addBloodBank() {
    this.router.navigate(['/bloodbank/add']);
  }
}
