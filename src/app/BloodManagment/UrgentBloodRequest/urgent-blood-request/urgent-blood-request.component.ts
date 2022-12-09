import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BloodType } from '../../interface/BloodType.enum';
import { CreateUrgentRequestDTO } from '../../interface/CreateUrgentRequestDTO';
import { BloodAcquisitionService } from '../../service/blood-acquisition.service';

@Component({
  selector: 'app-urgent-blood-request',
  templateUrl: './urgent-blood-request.component.html',
  styleUrls: ['./urgent-blood-request.component.scss'],
})
export class UrgentBloodRequestComponent {
  constructor(
    private bloodAcquisitionService: BloodAcquisitionService,
    private toastrService: ToastrService,
    private router: Router
  ) {
    this.urgentBloodRequest = {
      bloodType: 0,
      amount: 0,
    };
  }

  disabled = true;
  amount: number;
  bloodType: BloodType;
  bloodTypes = Object.values(BloodType);
  bloodTypeString: number;
  urgentBloodRequest: CreateUrgentRequestDTO;

  createUrgentRequest() {
    this.urgentBloodRequest.bloodType = this.bloodTypes.indexOf(this.bloodType);
    this.urgentBloodRequest.amount = this.amount;
    this.bloodAcquisitionService
      .createUrgentBloodRequest(this.urgentBloodRequest)
      .subscribe((res) => {
        this.toastrService.success('Urgent request sent!');
        this.router.navigate(['/doctorBloodRequests']);
      });
  }

  ngDoCheck(): void {
    if (this.bloodType != null && this.amount != null) this.disabled = false;
  }
}
