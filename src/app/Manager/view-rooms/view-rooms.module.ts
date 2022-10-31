import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewRoomsComponent } from './view-rooms.component';
import { MatSelectModule } from '@angular/material/select';
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { MatOption, MatOptionModule } from '@angular/material/core';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { MatInputModule } from '@angular/material/input';
import { ShowBuildingDetailsComponent } from './show-details/show-building-details/show-building-details.component';
import { ShowFloorDetailsComponent } from './show-details/show-floor-details/show-floor-details.component';
import { ShowRoomDetailsComponent } from './show-details/show-room-details/show-room-details.component';

@NgModule({
  declarations: [ViewRoomsComponent, ShowDetailsComponent, ShowBuildingDetailsComponent, ShowFloorDetailsComponent, ShowRoomDetailsComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
  ],
  exports: [ViewRoomsComponent],
})
export class ViewRoomsModule {}
