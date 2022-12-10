import { HttpErrorResponse } from '@angular/common/http';
import { Component, SimpleChanges } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IPatient } from '../interface/ipatient';
import { BlockserviceService } from '../service/blockservice.service';

@Component({
  selector: 'app-tab-blocked-patients',
  templateUrl: './tab-blocked-patients.component.html',
  styleUrls: ['./tab-blocked-patients.component.scss']
})
export class TabBlockedPatientsComponent {
  displayedColumns: string[] = ['firstName', 'lastName', 'button'];
  dataSource = new MatTableDataSource<IPatient>();
  public blockedPatients: IPatient[] = [];
  constructor(private patientService: BlockserviceService, private toastService: ToastrService, private router: Router) {}


  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<IPatient>(
      this.blockedPatients
    );
  }

  ngOnInit(): void {
    this.getBlockedPatients();
  }

  getBlockedPatients(): void {
    this.patientService
      .getBlocked()
      .subscribe(
        (response: IPatient[]) => {
          this.dataSource = new MatTableDataSource<IPatient>(response);
        },
        (error: HttpErrorResponse) => {
          this.toastService.error(error.message);
        }
      );
  }
  onTableRowClick(patient: IPatient): void {
    this.router.navigate(['/unblock/', patient.id]);
  }
  UnblockPatient(patientId: number): void{
    console.log(patientId);
    this.patientService.unblockPatient(patientId).subscribe((response: IPatient)=>{
      console.log(response.blocked)
      this.getBlockedPatients();
    });
  }
}
