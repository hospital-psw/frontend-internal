import { Component } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { BloodType } from '../interface/BloodType.enum';

@Component({
  selector: 'app-tender-offer',
  templateUrl: './tender-offer.component.html',
  styleUrls: ['./tender-offer.component.scss'],
})
export class TenderOfferComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  bloodTypes = Object.values(BloodType).splice(0, 8);

  ngOnInit() {
    // will log the entire data object
  }

  calcTotal() {
    let sum = 0;
    // console.log(this.data);
    for (let item of this.data.items) {
      sum += item.quantity * item.money.amount;
    }
    return sum;
  }
}
