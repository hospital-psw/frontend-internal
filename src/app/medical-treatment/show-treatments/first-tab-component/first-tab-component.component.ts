import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { MedicalTreatmentService } from './../../service/medical-treatment.service';
import { MedicalTreatment } from './../../interface/MedicalTreatment';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  OnChanges,
  SimpleChanges,
  Input,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-tab-component',
  templateUrl: './first-tab-component.component.html',
  styleUrls: ['./first-tab-component.component.scss'],
})
export class FirstTabComponentComponent implements OnInit, OnChanges {
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
  length: number;
  @Input() activeTreatments: MedicalTreatment[];

  @ViewChild('activeTreatmentPaginator') paginator: MatPaginator;

  constructor(
    private medicalTreatmentService: MedicalTreatmentService,
    private toastService: ToastrService,
    private router: Router
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<MedicalTreatment>(
      this.activeTreatments
    );
  }

  ngOnInit(): void {
    this.getActiveTreatment();
  }

  getActiveTreatment(): void {
    this.medicalTreatmentService.getActive().subscribe(
      (response: MedicalTreatment[]) => {
        this.dataSource = new MatTableDataSource<MedicalTreatment>(response);
        this.dataSource.paginator = this.paginator;
        this.length = response.length;
      },
      (error: HttpErrorResponse) => {
        this.toastService.error(error.message);
      }
    );
  }

  onPaginateChange(event: any): void {
    this.pageSize = event.pageSize;
    this.pageNumber = event.pageIndex;
    this.length = event.lenght;
    console.log(this.pageSize, this.pageNumber);
  }

  onTableRowClick(medicalTreatment: MedicalTreatment): void {
    this.router.navigate(['/treatment/', medicalTreatment.id]);
  }
}
