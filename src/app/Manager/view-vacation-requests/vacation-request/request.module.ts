import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

import { RequestComponent } from './request.component';
import { RejectRequestDialogComponent } from '../reject-request-dialog/reject-request-dialog.component';

<<<<<<< HEAD
@NgModule({
  declarations: [RequestComponent, RejectRequestDialogComponent],
  entryComponents: [RejectRequestDialogComponent],
  imports: [CommonModule, MaterialModule],
  exports: [RequestComponent],
})
export class RequestModule {}
=======

@NgModule({
  declarations: [
    RequestComponent,
    RejectRequestDialogComponent
  ],
  entryComponents: [RejectRequestDialogComponent],
  imports: [
    CommonModule,
    MaterialModule
  ], 
  exports: [RequestComponent],
})
export class RequestModule { }
>>>>>>> b826a10 (Implemented UI for showing requests and modal dialog for request rejection)
