import { HttpErrorResponse } from '@angular/common/http';
import { Component, SimpleChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IPatient } from '../interface/ipatient';
import { BlockserviceService } from '../service/blockservice.service';

@Component({
  selector: 'app-tab-malicious-patients',
  templateUrl: './tab-malicious-patients.component.html',
  styleUrls: ['./tab-malicious-patients.component.scss'],
})
export class TabMaliciousPatientsComponent {
  displayedColumns: string[] = ['firstName', 'lastName', 'strikes', 'button'];
  dataSource = new MatTableDataSource<IPatient>();
  public maliciousPatients: IPatient[] = [];
  constructor(
    private patientService: BlockserviceService,
    private toastService: ToastrService,
    private router: Router
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<IPatient>(this.maliciousPatients);
  }

  ngOnInit(): void {
    this.getMaliciousPatients();
  }

  getMaliciousPatients(): void {
    this.patientService.getMalicious().subscribe(
      (response: IPatient[]) => {
        this.dataSource = new MatTableDataSource<IPatient>(response);
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        this.toastService.error(error.message);
      }
    );
  }
  BlockPatient(patientId: number): void {
    console.log(patientId);
    this.patientService
      .blockPatient(patientId)
      .subscribe((response: IPatient) => {
        console.log(response.blocked);
        this.getMaliciousPatients();
      });
  }
}
