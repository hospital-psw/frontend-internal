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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PdfViewerModule } from 'ng2-pdf-viewer';
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
import {
  NgxUiLoaderConfig,
  NgxUiLoaderHttpModule,
  NgxUiLoaderModule,
  POSITION,
  SPINNER,
} from 'ngx-ui-loader';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: '#1493ff',
  fgsPosition: 'center-center',
  fgsSize: 90,
  fgsType: SPINNER.threeBounce,
  gap: 24,
  logoPosition: POSITION.centerCenter,
  logoSize: 120,
  logoUrl: '',
  masterLoaderId: 'master',
  overlayBorderRadius: '0',
  overlayColor: 'rgba(40, 40, 40, 0.8)',
  pbColor: '#1493ff',
  pbDirection: 'ltr',
  pbThickness: 3,
  hasProgressBar: true,
};

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
    MatSlideToggleModule,
    PdfViewerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTabsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
  ],
})
export class StatisticsModule {}
