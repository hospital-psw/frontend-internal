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
import { RenovationStatisticsComponent } from './Components/renovation-statistics/renovation-statistics.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MainComponentComponent } from './Components/examination-statistics/main-component/main-component.component';
import { TableComponentComponent } from './Components/examination-statistics/table-component/table-component.component';
import { DurationTabComponent } from './Components/examination-statistics/duration-tab/duration-tab.component';
import { StepsTabComponent } from './Components/examination-statistics/steps-tab/steps-tab.component';
import { PrescriptionsTabComponent } from './Components/examination-statistics/prescriptions-tab/prescriptions-tab.component';
import { SymptomsTabComponent } from './Components/examination-statistics/symptoms-tab/symptoms-tab.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    StatisticsComponent,
    StatisticsNavigationComponent,
    DataTableComponent,
    TestComponent,
    RenovationStatisticsComponent,
    MainComponentComponent,
    TableComponentComponent,
    DurationTabComponent,
    StepsTabComponent,
    PrescriptionsTabComponent,
    SymptomsTabComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTabsModule,
  ],
})
export class StatisticsModule {}
