import { Component } from '@angular/core';
import { BloodType } from '../../interface/BloodType.enum';
import { CreateExpenditureDTO } from '../../interface/CreateExpenditureDTO';

@Component({
  selector: 'app-blood-expenditure',
  templateUrl: './blood-expenditure.component.html',
  styleUrls: ['./blood-expenditure.component.scss']
})
export class BloodExpenditureComponent {

  reason:string;
  bloodTypes = Object.values(BloodType);
  createExpenditureDTO:CreateExpenditureDTO;
  amount:number;
  bloodType:BloodType;
  bloodTypeString:string;

  createExpenditure():void{
    this.createExpenditureDTO.reason = this.reason;
    this.createExpenditureDTO.amount = this.amount;

    this.bloodTypeString = this.bloodTypes[parseInt(this.bloodType)];

    //this.createExpenditureDTO.bloodType = this.bloodTypeString;

    console.log(this.bloodType);
    
  }

  ngOnInit(): void {
    this.createExpenditureDTO = {
      doctorId: 2,
      reason: "",
      date: null as any,
      amount:20,
      bloodType:BloodType.AB_MINUS

    };
  }
}
