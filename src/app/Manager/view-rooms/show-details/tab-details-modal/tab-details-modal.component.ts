import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAppointmentDisplay } from 'src/app/Manager/Model/AppointmentDisplay';
import { IConsiliumDisplay } from 'src/app/Manager/Model/ConsiliumDisplay';
import { IEquipment } from 'src/app/Manager/Model/Equipment';
import { IRelocationRequestDisplay } from 'src/app/Manager/Model/RelocationRequestDisplay';
import { IRenovationRequestDisplay } from 'src/app/Manager/Model/RenovationRequestDisplay';

@Component({
  selector: 'app-tab-details-modal',
  templateUrl: './tab-details-modal.component.html',
  styleUrls: ['./tab-details-modal.component.scss']
})
export class TabDetailsModalComponent implements OnInit{
  @Input() room: any;
  @Input() equipment: IEquipment[];
  @Input() relocationRequests: IRelocationRequestDisplay[];
  @Input() appointments: IAppointmentDisplay[];
  @Input() renovations: IRenovationRequestDisplay[];
  @Input() consiliums: IConsiliumDisplay[];
  @Output() closeNotify = new EventEmitter();
  ngOnInit(): void {
    console.log(this.room)
  }
  closeTabs() {
    this.closeNotify.emit();
  }

}
