import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
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
  //dataSize = pageSize
  pageSize: number = 5;
  pageNumber: number = 1;
  length: number;
  //number of data getting from backend (dataSize~pageSize in emitting)
  dataSize: number = 60;
  paginatorColor: ThemePalette = 'primary';
  @Input() inactiveTreatments: MedicalTreatment[];
  @Output() pageSizeOutput = new EventEmitter<number>();
  @Output() pageNumberOutput = new EventEmitter<number>();

  @ViewChild('activeTreatmentPaginator') paginator: MatPaginator;

  constructor(
    private medicalTreatmentService: MedicalTreatmentService,
    private toastService: ToastrService,
    private router: Router
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<MedicalTreatment>(
      this.inactiveTreatments
    );
  }

  ngOnInit(): void {
    this.getInactiveTreatment();
    this.pageSizeOutput.emit(this.dataSize);
    this.pageNumberOutput.emit(this.pageNumber);
  }

  getInactiveTreatment(): void {
    this.medicalTreatmentService
      .getInactive(this.dataSize, this.pageNumber)
      .subscribe(
        (response: MedicalTreatment[]) => {
          this.dataSource = new MatTableDataSource<MedicalTreatment>(response);
          this.dataSource.paginator = this.paginator;
          //pageSize data 0 not acceptable on backend, but required on front
          this.pageNumber = 0;
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
    this.pageSizeOutput.emit(this.pageSize);
    this.pageNumberOutput.emit(this.pageNumber);
    console.log(this.pageSize, this.pageNumber);
  }

  onTableRowClick(medicalTreatment: MedicalTreatment): void {
    this.router.navigate(['/app/treatment/', medicalTreatment.id]);
  }
}
