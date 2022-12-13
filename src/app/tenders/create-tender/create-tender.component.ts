import { Component, OnInit } from '@angular/core';
import { TenderService } from '../services/tender.service';
import { Router } from '@angular/router';
import { BloodType } from '../interface/BloodType.enum';
import { CreateTenderDTO } from '../interface/CreateTenderDTO';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-tender',
  templateUrl: './create-tender.component.html',
  styleUrls: ['./create-tender.component.scss'],
})
export class CreateTenderComponent implements OnInit {
  constructor(
    private tenderService: TenderService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  bloodType: BloodType;
  bloodTypes = Object.values(BloodType);
  bloodTypeString: number;
  quantity: number;
  moneyAmount: number;
  dateSelected: Date;
  createTenderDTO: CreateTenderDTO;

  createTender() {
    let endDate = this.dateSelected;
    this.createTenderDTO.endDate = new Date(
      endDate?.getFullYear()!,
      endDate?.getMonth()!,
      endDate?.getDate(),
      endDate?.getHours()!
    );
    this.createTenderDTO.quantity = this.quantity;
    this.createTenderDTO.moneyAmount = this.moneyAmount;

    this.bloodTypeString = this.bloodTypes.indexOf(this.bloodType);

    this.createTenderDTO.bloodType = this.bloodTypeString;

    this.tenderService.createTender(this.createTenderDTO).subscribe(
      (response: CreateTenderDTO) => {
        this.toastrService.success('Create tender');
        this.router.navigateByUrl('/show-tenders');
      },
      (error: HttpErrorResponse) => {
        this.toastrService.error(error.error);
      }
    );
  }

  ngOnInit(): void {
    this.createTenderDTO = {
      bloodType: 0,
      moneyAmount: 50,
      quantity: 5,
      endDate: null as any,
    };
  }
}
