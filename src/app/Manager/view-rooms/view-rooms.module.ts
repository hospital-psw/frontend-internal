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
import { MatInputModule } from '@angular/material/input';
import { ShowBuildingDetailsComponent } from './show-details/show-building-details/show-building-details.component';
import { ShowFloorDetailsComponent } from './show-details/show-floor-details/show-floor-details.component';
import { ShowRoomDetailsComponent } from './show-details/show-room-details/show-room-details.component';
import { ShowSearchedRoomsComponent } from './show-searched-rooms/show-searched-rooms/show-searched-rooms.component';
import { ShowEquipmentComponent } from './show-details/show-equipment/show-equipment.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    ViewRoomsComponent,
    ShowBuildingDetailsComponent,
    ShowFloorDetailsComponent,
    ShowRoomDetailsComponent,
    ShowSearchedRoomsComponent,
    ShowEquipmentComponent,
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatTableModule,
  ],
  exports: [ViewRoomsComponent],
})
export class ViewRoomsModule {}
