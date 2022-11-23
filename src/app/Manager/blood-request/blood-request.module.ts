import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloodRequestViewComponent } from './blood-request-view/blood-request-view.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RequestDeclineDialogComponent } from './request-decline-dialog/request-decline-dialog/request-decline-dialog.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ReconsiderBloodRequestComponent } from './reconsider-blood-request/reconsider-blood-request/reconsider-blood-request.component';
import { RequestEditComponent } from './request-edit/request-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'request/:id/update', component: RequestEditComponent },
];

@NgModule({
  declarations: [
    BloodRequestViewComponent,
    RequestDeclineDialogComponent,
    ReconsiderBloodRequestComponent,
    RequestEditComponent,
    RequestEditComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatTableModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatPaginatorModule,
    MaterialModule,
  ],
  exports: [RouterModule],
})
export class BloodRequestModule {}
