import { Component, OnInit } from '@angular/core';
import { parse } from 'date-fns';
import { BloodAcquisition } from '../interface/BloodAcquisition';
import { BloodAcquisitionService } from '../service/blood-acquisition.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/auth/service/auth.service';

@Component({
  selector: 'app-doctor-requests',
  templateUrl: './doctor-requests.component.html',
  styleUrls: ['./doctor-requests.component.scss'],
})
export class DoctorRequestsComponent implements OnInit {
  constructor(
    private bloodAcquisitionService: BloodAcquisitionService,
    private router: Router,
    private authService: AuthService
  ) {}

  doctorId: number;
  dataSource: Object[];
  displayedColumns: string[] = [
    'date',
    'bloodType',
    'amount',
    'reason',
    'status',
  ];

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.doctorId = user.id;
    });
    this.bloodAcquisitionService
      .getBloodAcquisitionsForSpecificDoctor(this.doctorId)
      .subscribe((response: BloodAcquisition[]) => {
        this.dataSource = response;
      });
  }

  createAcquisitionPage() {
    this.router.navigateByUrl('/app/bloodAcquisition/create');
  }
  createExpenditurePage() {
    this.router.navigateByUrl('/app/bloodExpenditure/create');
  }

  createUrgentRequestPage() {
    this.router.navigateByUrl('/app/urgentBloodRequest/create');
  }
  goToBloodStorage(){
    this.router.navigateByUrl('/app/blood-storage')
  }

}
