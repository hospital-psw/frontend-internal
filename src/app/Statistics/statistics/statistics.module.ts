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
import { UrgentBloodTransferStatisticsComponent } from './Components/urgent-blood-transfer-statistics/urgent-blood-transfer-statistics.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    StatisticsComponent,
    StatisticsNavigationComponent,
    DataTableComponent,
    TestComponent,
    RenovationStatisticsComponent,
    UrgentBloodTransferStatisticsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    PdfViewerModule,
  ],
})
export class StatisticsModule {}
