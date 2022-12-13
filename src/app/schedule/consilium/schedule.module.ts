import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleConsiliumComponent } from './schedule-consilium/main-component/schedule-consilium.component';
import { AllConsiliumsComponent } from './all-consiliums/all-consiliums.component';
import { DoctorsListComponent } from './schedule-consilium/doctors-list/doctors-list.component';
import { SpecializationsListComponent } from './schedule-consilium/specializations-list/specializations-list.component';
import { OtherInfoComponent } from './schedule-consilium/other-info/other-info.component';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { ButtonSpaceComponent } from './schedule-consilium/button-space/button-space.component';
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
    ScheduleConsiliumComponent,
    AllConsiliumsComponent,
    DoctorsListComponent,
    SpecializationsListComponent,
    OtherInfoComponent,
    ButtonSpaceComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatOptionModule,
    FormsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
  ],
})
export class ScheduleModule {}
