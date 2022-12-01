import { IRenovationRequestDisplay } from './../../../Model/RenovationRequestDisplay';
import { Component } from '@angular/core';
import {  OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IAppointmentDisplay } from 'src/app/Manager/Model/AppointmentDisplay';
import { IEquipment } from 'src/app/Manager/Model/Equipment';
import { IRelocationRequestDisplay } from 'src/app/Manager/Model/RelocationRequestDisplay';
import { ToastrService } from 'ngx-toastr';
import { RelocationRequestService } from 'src/app/Manager/service/relocation-request-service';
import { IRoom } from 'src/app/Manager/Model/Room';

@Component({
  selector: 'app-tabs-details',
  templateUrl: './tabs-details.component.html',
  styleUrls: ['./tabs-details.component.scss']
})
export class TabsDetailsComponent {
  constructor(private toastr: ToastrService, private relocationRequestService: RelocationRequestService) {}
  @Input() relocationRequests: IRelocationRequestDisplay[];
  @Input() appointments: IAppointmentDisplay[]
  @Input() equipment: IEquipment[];
  @Input() room: IRoom;
  @Input() renovations: IRenovationRequestDisplay[];


  @Output() relocateNotify = new EventEmitter<any>();
  element: IEquipment;
  doRelocate: boolean = false;
  selectedEquipment: string = '-1';
  showSuccess() {
    this.toastr.success('Successfully eddited room.', 'Success');
  }

  //relocate(element: IEquipment) {
   // this.relocateNotify.emit(element);
  //}

  selectEquipment(evt: any): void {
    this.selectedEquipment = evt.value;
  }

  relocate(element: IEquipment) {
    this.doRelocate = true;
    this.element = element;
  }

  refreshEquipment(event: any) {
    this.equipment.forEach((element) => {
      if (element.id == event.equipmentId)
        element.reservedQuantity += event.reservedQuantity;
    });
  }

  closeStepper() {
    this.doRelocate = false;
  }
}
