import { AuthService } from 'src/app/common/auth/service/auth.service';
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
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { JwtService } from 'src/app/common/auth/service/jwt.service';

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
  //dataSize = pageSize
  pageSize: number = 5;
  pageNumber: number = 1;
  length: number;
  isLoading: boolean = false;
  //number of data getting from backend (dataSize~pageSize in emitting)
  dataSize: number = 60;
  dataLoaded = false;
  doctorId: number;
  paginatorColor: ThemePalette = 'primary';
  @Output() pageSizeOutput = new EventEmitter<number>();
  @Output() pageNumberOutput = new EventEmitter<number>();

  color: ThemePalette = 'primary';
  value = 60;
  mode: ProgressSpinnerMode = 'indeterminate';
  @Input() activeTreatments: MedicalTreatment[];

  @ViewChild('activeTreatmentPaginator') paginator: MatPaginator;

  constructor(
    private medicalTreatmentService: MedicalTreatmentService,
    private toastService: ToastrService,
    private router: Router,
    private authService: AuthService,
    private jwtService: JwtService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<MedicalTreatment>(
      this.activeTreatments
    );
  }

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.doctorId = user.id;
    });
    this.getActiveTreatment();
    this.pageSizeOutput.emit(this.dataSize);
    this.pageNumberOutput.emit(this.pageNumber);
  }

  getActiveTreatment(): void {
    this.isLoading = true;
    this.medicalTreatmentService
      .getActive(this.doctorId, this.dataSize, this.pageNumber)
      .subscribe(
        (response: MedicalTreatment[]) => {
          this.dataSource = new MatTableDataSource<MedicalTreatment>(response);
          this.dataLoaded = true;
          this.dataSource.paginator = this.paginator;
          //pageSize data 0 not acceptable on backend, but required on front
          this.pageNumber = 0;
          this.length = response.length;
          this.isLoading = false;
        },
        (error: HttpErrorResponse) => {
          this.toastService.error(error.message);
          this.isLoading = false;
        }
      );
  }

  onPaginateChange(event: any): void {
    this.pageSize = event.pageSize;
    this.pageNumber = event.pageIndex;
    this.length = event.lenght;
    this.pageSizeOutput.emit(this.pageSize);
    this.pageNumberOutput.emit(this.pageNumber);
  }

  onTableRowClick(medicalTreatment: MedicalTreatment): void {
    this.router.navigate(['/app/treatment/', medicalTreatment.id]);
  }
}
