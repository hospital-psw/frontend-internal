import { Component, OnInit } from '@angular/core';
import { TenderService } from '../services/tender.service';
import { Router } from '@angular/router';
import { BloodType } from '../interface/BloodType.enum';
import { CreateTenderDTO, TenderItem } from '../interface/CreateTenderDTO';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-tender',
  templateUrl: './create-tender.component.html',
  styleUrls: ['./create-tender.component.scss'],
})
export class CreateTenderComponent implements OnInit {
  bloodType: BloodType;
  bloodTypes = Object.values(BloodType);
  bloodTypeString: number;
  quantity: number;
  moneyAmount: number;
  dateSelected: Date;
  createTenderDTO: CreateTenderDTO;
  tenderItem: TenderItem;

  dateTime: Date;
  aPlus: number = 0;
  aMinus: number = 0;
  bPlus: number = 0;
  bMinus: number = 0;
  aBPlus: number = 0;
  aBMinus: number = 0;
  oPlus: number = 0;
  oMinus: number = 0;

  constructor(
    private tenderService: TenderService,
    private toastrService: ToastrService,
    private router: Router
  ) {
    this.createTenderDTO = {
      items: [],
      dueDate: new Date(),
    };
  }

  createTender() {
    let items: TenderItem[] = [];
    if (this.aPlus != 0) {
      items.push({
        bloodType: 0,
        quantity: this.aPlus,
        money: { amount: 0, currency: 0 },
      });
    }
    if (this.aMinus != 0) {
      items.push({
        bloodType: 1,
        quantity: this.aMinus,
        money: { amount: 0, currency: 0 },
      });
    }
    if (this.bPlus != 0) {
      items.push({
        bloodType: 2,
        quantity: this.bPlus,
        money: { amount: 0, currency: 0 },
      });
    }
    if (this.bMinus != 0) {
      items.push({
        bloodType: 3,
        quantity: this.bMinus,
        money: { amount: 0, currency: 0 },
      });
    }
    if (this.oPlus != 0) {
      items.push({
        bloodType: 4,
        quantity: this.oPlus,
        money: { amount: 0, currency: 0 },
      });
    }
    if (this.oMinus != 0) {
      items.push({
        bloodType: 5,
        quantity: this.oMinus,
        money: { amount: 0, currency: 0 },
      });
    }
    if (this.aBPlus != 0) {
      items.push({
        bloodType: 6,
        quantity: this.aBPlus,
        money: { amount: 0, currency: 0 },
      });
    }
    if (this.aBMinus != 0) {
      items.push({
        bloodType: 7,
        quantity: this.aBMinus,
        money: { amount: 0, currency: 0 },
      });
    }

    this.createTenderDTO.dueDate = this.dateSelected;
    this.createTenderDTO.items = items;

    // this.bloodTypeString = this.bloodTypes.indexOf(this.bloodType);

    //this.tenderItem.bloodType = this.bloodTypeString;

    this.tenderService.createTender(this.createTenderDTO).subscribe(
      (response: CreateTenderDTO) => {
        this.toastrService.success('Create tender');
        this.router.navigateByUrl('/app/show-tenders');
      },
      (error: HttpErrorResponse) => {
        this.toastrService.error(error.error);
      }
    );
  }

  ngOnInit(): void {}
}
