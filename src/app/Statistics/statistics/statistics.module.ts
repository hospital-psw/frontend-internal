import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './Components/statistics/statistics.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/material/material.module';
import { StatisticsNavigationComponent } from './Components/statistics-navigation/statistics-navigation.component';
import { DataTableComponent } from './Components/data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TestComponent } from './Components/test/test.component';



@NgModule({
  declarations: [
    StatisticsComponent,
    StatisticsNavigationComponent,
    DataTableComponent,
    TestComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class StatisticsModule { }
