import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

import { VacationRequestsComponent } from './vacation-requests.component';
import { RequestModule } from './vacation-request/request.module';
import { RejectRequestDialogComponent } from './reject-request-dialog/reject-request-dialog.component';


@NgModule({
  declarations: [
    VacationRequestsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RequestModule
  ], 
  exports: [VacationRequestsComponent],
})
export class VacationRequestsModule { }
