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
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { StepperModule } from 'src/app/schedule-relocation/stepper/stepper.module';
import { TabsDetailsComponent } from './show-details/tabs-details/tabs-details.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RelocationsComponent } from './show-details/relocations/relocations.component';
import { AppointmentsComponent } from './show-details/appointments/appointments.component';
import { RenovationsComponent } from './show-details/renovations/renovations/renovations.component';
import { RenovationStepperModule } from 'src/app/schedule-renovation/stepper/stepper.module';
import { ConsiliumsComponent } from './show-details/consiliums/consiliums/consiliums.component';
import { MaterialModule } from 'src/app/material/material.module';
import { TabDetailsModalComponent } from './show-details/tab-details-modal/tab-details-modal.component';

@NgModule({
  declarations: [
    ViewRoomsComponent,
    ShowBuildingDetailsComponent,
    ShowFloorDetailsComponent,
    ShowRoomDetailsComponent,
    ShowSearchedRoomsComponent,
    ShowEquipmentComponent,
    ShowRoomDetailsComponent,
    TabsDetailsComponent,
    RelocationsComponent,
    AppointmentsComponent,
    RenovationsComponent,
    ConsiliumsComponent,
    TabDetailsModalComponent,
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    StepperModule,
    MatTabsModule,
    RenovationStepperModule,
    MaterialModule,
  ],
  exports: [ViewRoomsComponent],
})
export class ViewRoomsModule {}
