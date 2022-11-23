import { Component } from '@angular/core';
import { parse } from 'date-fns';
import { BloodAcquisition } from '../interface/BloodAcquisition';
import { BloodAcquisitionService } from '../service/blood-acquisition.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-requests',
  templateUrl: './doctor-requests.component.html',
  styleUrls: ['./doctor-requests.component.scss']
})
export class DoctorRequestsComponent {
  
  constructor(
    private bloodAcquisitionService:BloodAcquisitionService,
    private router: Router
  ){}

  dataSource :Object[];
  displayedColumns: string[] = ['date', 'bloodType', 'amount', 'status'];

  ngOnInit() :void{
    
    this.bloodAcquisitionService
      .getBloodAcquisitionsForSpecificDoctor(2)
      .subscribe(
        (response: BloodAcquisition[]) => {
          this.dataSource = response;
        }
      );
      
    
  }

  createAcquisitionPage(){
    this.router.navigateByUrl('/bloodAcquisition/create');
  }
  createExpenditurePage(){
    this.router.navigateByUrl('/bloodExpenditure/create');
  }


}
