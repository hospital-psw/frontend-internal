import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BloodBank } from '../model/blood-bank.model';
import { BloodType } from '../model/blood-type.model';
import { BloodBankService } from '../services/blood-bank.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

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

  constructor(
    private bloodBankService: BloodBankService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.bloodBankService.getBloodBank(params['id']).subscribe(
        (res) => {
          this.bloodBank = res;
        },
        (err) => {
          this.toastr.warning('An error occurred, please try again later.');
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
        this.toastr.warning('An error occurred, please try again later.');
      }
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
}
