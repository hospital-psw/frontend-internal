import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

import { RequestComponent } from './request.component';
import { RejectRequestDialogComponent } from '../reject-request-dialog/reject-request-dialog.component';


@NgModule({
  declarations: [RequestComponent, RejectRequestDialogComponent],
  entryComponents: [RejectRequestDialogComponent],
  imports: [CommonModule, MaterialModule],
  exports: [RequestComponent],
})
export class RequestModule {}

