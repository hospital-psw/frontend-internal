import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { MedicalTreatment } from '../../interface/MedicalTreatment';
import { MedicalTreatmentService } from '../../service/medical-treatment.service';

@Component({
  selector: 'app-second-tab-component',
  templateUrl: './second-tab-component.component.html',
  styleUrls: ['./second-tab-component.component.scss'],
})
export class SecondTabComponentComponent implements OnInit, OnChanges {
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
  @Input() inactiveTreatments: MedicalTreatment[];

  @ViewChild('activeTreatmentPaginator') paginator: MatPaginator;

  constructor(
    private medicalTreatmentService: MedicalTreatmentService,
    private toastService: ToastrService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<MedicalTreatment>(
      this.inactiveTreatments
    );
  }

  ngOnInit(): void {
    this.getInactiveTreatment();
  }

  getInactiveTreatment(): void {
    this.medicalTreatmentService.getInactive().subscribe(
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
    this.length = event.length;
    console.log(this.pageSize, this.pageNumber);
  }

  onTableRowClick(medicalTreatment: MedicalTreatment): void {
    // this.router.navigate;
  }
}
