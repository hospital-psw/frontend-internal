import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableDataSource, DataTableItem } from './data-table-datasource';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableItem>;
  dataSource: DataTableDataSource;
  @Input() fromParent: DataTableItem[];

  displayedColumns = ['groupName', 'group1', 'group2', 'group3', 'group4', 'group5', 'group6',];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new DataTableDataSource(this.fromParent);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.table.dataSource = this.dataSource;
    this.dataSource.setData();
  }
}
