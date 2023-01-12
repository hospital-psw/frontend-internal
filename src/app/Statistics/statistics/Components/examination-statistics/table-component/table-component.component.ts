import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ExaminationStatisticsService } from './../../../Services/examination-statistics.service';
import { ExaminationData } from './../../../Interface/ExaminationData';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.scss'],
})
export class TableComponentComponent implements OnInit {
  displayedColumns: string[] = [
    'doctor',
    'patient',
    'date',
    'specialization',
    'type',
    'duration',
    'steps',
  ];
  dataSource = new MatTableDataSource<ExaminationData>();
  pageSize: number = 5;
  pageNumber: number = 0;
  dataSize: number = 100;
  length: number;
  paginatorColor: ThemePalette = 'primary';

  @ViewChild('examinationStatsPaginator') paginator: MatPaginator;

  constructor(
    private examinationStatsService: ExaminationStatisticsService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getExamData();
  }

  getExamData(): void {
    this.examinationStatsService
      .getExamData(this.dataSize, this.pageNumber)
      .subscribe(
        (response: ExaminationData[]) => {
          this.dataSource = new MatTableDataSource<ExaminationData>(response);
          this.dataSource.paginator = this.paginator;
          this.pageNumber = 0;
          this.length = response.length;
        },
        (error: HttpErrorResponse) => {
          this.toastrService.error(error.message);
        }
      );
  }

  onPaginateChange(event: any): void {
    this.pageSize = event.pageSize;
    this.pageNumber = event.pageIndex;
    this.length = event.length;
  }
}
