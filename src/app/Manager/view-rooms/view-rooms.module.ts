import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewRoomsComponent } from './view-rooms.component';
import {MatSelectModule} from '@angular/material/select';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatOption, MatOptionModule } from '@angular/material/core';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    ViewRoomsComponent,
    ShowDetailsComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule
  ],
  exports: [ViewRoomsComponent]
})
export class ViewRoomsModule { }
