import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BloodBank } from '../model/blood-bank.model';
import { BloodType } from '../model/blood-type.model';
import { BloodBankService } from '../services/blood-bank.service';

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

  constructor(
    private bloodBankService: BloodBankService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.bloodBankService.getBloodBank(params['id']).subscribe((res) => {
        this.bloodBank = res;
        console.log(this.bloodBank);
      });
    });
  }
  ff(): void {
    alert(this.selected);
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
