import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { MedicalTreatmentService } from './../../service/medical-treatment.service';
import { MedicalTreatment } from './../../interface/MedicalTreatment';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-tab-component',
  templateUrl: './first-tab-component.component.html',
  styleUrls: ['./first-tab-component.component.scss']
})
export class FirstTabComponentComponent implements OnInit {
  displayedColumns: string[] = [
    'room',
    'floor',
    'building',
    'patient',
    'arrival',
  ];
  dataSource = new MatTableDataSource<MedicalTreatment>();
  pageSize: number = 10;
  pageNumber: number = 0;

  @ViewChild('activeTreatmentPaginator') paginator: MatPaginator;

  constructor(
    private medicalTreatmentService: MedicalTreatmentService,
    private toastService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getActiveTreatment();
    this.dataSource.paginator = this.paginator;
  }

  getActiveTreatment(): void {
    this.medicalTreatmentService.getActive().subscribe(
      (response: MedicalTreatment[]) => {
        this.dataSource = new MatTableDataSource<MedicalTreatment>(response);
      },
      (error: HttpErrorResponse) => {
        this.toastService.error(error.message);
      }
    );
  }

  onTableRowClick(): void {
    // this.router.navigate;
  }
}
