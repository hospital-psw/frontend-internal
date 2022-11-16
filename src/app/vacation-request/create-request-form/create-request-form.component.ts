import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ToastrService } from 'ngx-toastr';
import { NewVacationRequestDTO } from '../model/enum/new-vacation-request-dto';
import { VacationRequestStatus } from '../model/enum/vacation-request-status';
import { VacationRequestService } from '../service/vacation-request.service';

@Component({
  selector: 'app-create-request-form',
  templateUrl: './create-request-form.component.html',
  styleUrls: ['./create-request-form.component.scss']
})
export class CreateRequestFormComponent implements OnInit {

  range = new FormGroup({
    from: new FormControl<Date | null>(null),
    to: new FormControl<Date | null>(null)
  });

  urgentCheck: boolean = false;
  comment: string;
  from: Date = new Date();
  to: Date = new Date();
  doctorId = 8;
  newVacationRequest: NewVacationRequestDTO;
  vacationRequestStatus: VacationRequestStatus[];

  

  constructor(private vacationRequestService: VacationRequestService,
              private toaster: ToastrService) { }

  ngOnInit(): void {
    this.vacationRequestStatus = Object.values(VacationRequestStatus);
  }

  onChange(){
    if(this.urgentCheck === false){
      this.urgentCheck = true;
    } else {
      this.urgentCheck = false;
    }

  }

  createVacationRequest(){
    this.from = this.range.controls['from'].value as Date;
    this.to = this.range.controls['to'].value as Date;

    this.newVacationRequest = {
      from: this.from,
      to: this.to,
      status: this.vacationRequestStatus.indexOf(VacationRequestStatus.WAITING) as any,
      urgent: this.urgentCheck,
      comment: this.comment,
      doctorId: this.doctorId
    }
    

    console.log(this.newVacationRequest)
    this.vacationRequestService.createVacationRequest(this.newVacationRequest).subscribe((data) =>{
      this.toaster.success("Successfully created request!");
    }, (error: HttpErrorResponse) => {
      this.toaster.error(error.error);
    })

  }

}
