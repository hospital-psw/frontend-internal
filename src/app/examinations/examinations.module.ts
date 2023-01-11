import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExaminationStepperComponent } from './examination-stepper/examination-stepper.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BaseComponent } from './anamnesis-perscriptions-review/base/base.component';
import { PerscriptionsTabComponent } from './anamnesis-perscriptions-review/perscriptions-tab/perscriptions-tab.component';
import { AnamnesisTabComponent } from './anamnesis-perscriptions-review/anamnesis-tab/anamnesis-tab.component';
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
    ExaminationStepperComponent,
    PrescriptionsComponent,
    BaseComponent,
    PerscriptionsTabComponent,
    AnamnesisTabComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatTabsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
  ],
})
export class ExaminationsModule {}
