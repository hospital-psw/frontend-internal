import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomComponent } from './Room/room/room.component';
import { ViewRoomsComponent } from './view-rooms.component';
import { MatSelectModule } from '@angular/material/select';
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { MatOption, MatOptionModule } from '@angular/material/core';

@NgModule({
  declarations: [RoomComponent, ViewRoomsComponent],
  imports: [CommonModule, MatSelectModule, MatFormFieldModule, MatOptionModule],
  exports: [ViewRoomsComponent],
})
export class ViewRoomsModule {}
