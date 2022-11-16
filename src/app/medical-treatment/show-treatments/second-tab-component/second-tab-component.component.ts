import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { MedicalTreatment } from '../../interface/MedicalTreatment';
import { MedicalTreatmentService } from '../../service/medical-treatment.service';

@Component({
  selector: 'app-second-tab-component',
  templateUrl: './second-tab-component.component.html',
  styleUrls: ['./second-tab-component.component.scss']
})
export class SecondTabComponentComponent implements OnInit {

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
    private toastService: ToastrService
  ) { }

  ngOnInit(): void {
    this.getInactiveTreatment();
    this.dataSource.paginator = this.paginator;
  }

  getInactiveTreatment(): void {
    this.medicalTreatmentService.getInactive().subscribe(
      (response: MedicalTreatment[]) => {
        this.dataSource = new MatTableDataSource<MedicalTreatment>(response);
      },
      (error: HttpErrorResponse) => {
        this.toastService.error(error.message);
      }
    );
  }


}
