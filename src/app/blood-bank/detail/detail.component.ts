import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BloodBank } from '../model/blood-bank.model';
import { BloodType } from '../model/blood-type.model';
import { BloodBankService } from '../services/blood-bank.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl } from '@angular/forms';
import { MonthlyTransfer } from '../model/MonthlyTransfer.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  bloodBank: BloodBank = new BloodBank();
  bloodTypes = Object.values(BloodType).splice(0, 8);
  hide = true;
  selected: any = '';
  showResponse = false;
  showAnwser = false;
  showResponse1 = false;
  showAnwser1 = false;
  showConf = false;
  monthlyTransfer = new MonthlyTransfer();

  constructor(
    private bloodBankService: BloodBankService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.bloodBankService.getBloodBank(params['id']).subscribe(
        (res) => {
          this.bloodBank = res;

          if (String(this.bloodBank.reportTo) === '0001-01-01T00:00:00') {
            this.bloodBank.reportTo = new Date();
          }
          if (String(this.bloodBank.reportFrom) === '0001-01-01T00:00:00') {
            this.bloodBank.reportFrom = new Date();
          }
          if (this.bloodBank.monthlyTransfer == null) {
            this.bloodBank.monthlyTransfer = new MonthlyTransfer();
          }
        },
        (err) => {
          this.bloodBankService.errorHandling(err);
        }
      );
    });
  }
  checkBoodType(id: number): void {
    this.bloodBankService.checkBoodType(id, this.selected).subscribe(
      (res) => {
        this.showAnwser = true;
        this.showResponse = res;
      },
      (err) => {
        this.bloodBankService.errorHandling(err);
      }
    );
  }

  checkBoodTypeAmount(id: number, amount: number): void {
    this.bloodBankService
      .checkBoodTypeAmount(id, this.selected, amount)
      .subscribe(
        (res) => {
          this.showAnwser1 = true;
          this.showResponse1 = res;
        },
        (err) => this.bloodBankService.errorHandling(err)
      );
  }

  hideResponse(): void {
    this.showAnwser = false;
  }

  public updateBloodBank() {
    this.router.navigate(['/bloodbank/' + this.bloodBank.id + '/update']);
  }

  public deleteBloodBank() {
    this.bloodBankService
      .deleteBloodBank(this.bloodBank.id)
      .subscribe((res) => {
        this.router.navigate(['/bloodbank']);
      });
  }

  public showConfiguration() {
    if (this.showConf) {
      this.showConf = false;
    } else {
      this.showConf = true;
    }
  }

  public saveConfiguration() {
    this.bloodBankService
      .saveConfiguration(
        this.bloodBank.id,
        this.bloodBank.frequently,
        this.bloodBank.reportTo,
        this.bloodBank.reportFrom
      )
      .subscribe((a) => {
        this.showConf = false;
        this.bloodBankService.success('Saved configuration successfully.');
      });
  }
  public updateMonthly() {
    this.monthlyTransfer.dateTime = this.bloodBank.monthlyTransfer.dateTime;
    this.monthlyTransfer.aBMinus = this.bloodBank.monthlyTransfer.aBMinus;
    this.monthlyTransfer.aBPlus = this.bloodBank.monthlyTransfer.aBPlus;
    this.monthlyTransfer.aMinus = this.bloodBank.monthlyTransfer.aMinus;
    this.monthlyTransfer.aPlus = this.bloodBank.monthlyTransfer.aPlus;
    this.monthlyTransfer.bMinus = this.bloodBank.monthlyTransfer.bMinus;
    this.monthlyTransfer.bPlus = this.bloodBank.monthlyTransfer.bPlus;
    this.monthlyTransfer.oMinus = this.bloodBank.monthlyTransfer.oMinus;
    this.monthlyTransfer.oPlus = this.bloodBank.monthlyTransfer.oPlus;

    this.bloodBankService
      .updateMonthly(this.bloodBank.id, this.monthlyTransfer)
      .subscribe((a) => {
        this.showConf = false;
        this.bloodBankService.success('Saved configuration successfully.');
      });
  }
}
