import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BloodBank } from '../model/blood-bank.model';
import { BloodType } from '../model/blood-type.model';
import { BloodBankService } from '../services/blood-bank.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl } from '@angular/forms';

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
}
