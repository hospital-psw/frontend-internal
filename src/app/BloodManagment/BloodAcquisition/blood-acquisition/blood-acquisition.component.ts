import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CreateAcquisitionDTO } from '../../interface/CreateAcquisitionDTO';
import { BloodType } from '../../interface/BloodType.enum';
import { DatePipe } from '@angular/common';
import { BloodAcquisitionService } from '../../service/blood-acquisition.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-blood-acquisition',
  templateUrl: './blood-acquisition.component.html',
  styleUrls: ['./blood-acquisition.component.scss']
})
export class BloodAcquisitionComponent implements OnInit {

  constructor(private datePipe: DatePipe,
    private bloodAcquisitionService:BloodAcquisitionService,
    private toastrService: ToastrService,
    private router: Router) {
    this.minDate = new Date();
    
    
   }

  createAcquisitionDTO:CreateAcquisitionDTO;
  dateSelected:Date;
  amount:number;
  reason:string;
  bloodType:BloodType;
  minDate:Date;

  createAcquisition(){
    
    let date = this.dateSelected;
    this.createAcquisitionDTO.date = new Date(
      date?.getFullYear()!,
      date?.getMonth()!,
      date?.getDate(),
      date?.getHours()! + 5
    );

    this.createAcquisitionDTO.bloodType = this.bloodType;
    this.createAcquisitionDTO.reason = this.reason;
    this.createAcquisitionDTO.amount = this.amount;

    
    console.log(this.createAcquisitionDTO);  
      
    this.bloodAcquisitionService
      .createBloodAcquisition(this.createAcquisitionDTO)
      .subscribe(
        (response: CreateAcquisitionDTO) => {
          this.toastrService.success(
            'Create acquisition'
          );
          this.router.navigate(['']);
        },
        (error: HttpErrorResponse) => {
          this.toastrService.error(error.error);
        }
      );
  }

  


  ngOnInit(): void {
    this.createAcquisitionDTO = {
      doctorId: 2,
      reason: "",
      date: null as any,
      amount:20,
      bloodType:BloodType.AB_MINUS

    };
  }

}
