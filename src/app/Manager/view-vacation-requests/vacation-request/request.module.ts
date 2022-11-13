import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

import { RequestComponent } from './request.component';
import { RejectRequestDialogComponent } from '../reject-request-dialog/reject-request-dialog.component';

<<<<<<< HEAD
<<<<<<< HEAD
@NgModule({
  declarations: [RequestComponent, RejectRequestDialogComponent],
  entryComponents: [RejectRequestDialogComponent],
  imports: [CommonModule, MaterialModule],
  exports: [RequestComponent],
})
export class RequestModule {}
=======

=======
>>>>>>> 1bcaf2f (small update)
@NgModule({
  declarations: [RequestComponent, RejectRequestDialogComponent],
  entryComponents: [RejectRequestDialogComponent],
  imports: [CommonModule, MaterialModule],
  exports: [RequestComponent],
})
<<<<<<< HEAD
export class RequestModule { }
>>>>>>> b826a10 (Implemented UI for showing requests and modal dialog for request rejection)
=======
export class RequestModule {}
>>>>>>> 1bcaf2f (small update)
