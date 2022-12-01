import { Component, Input } from '@angular/core';
import { RoomService } from '../../../service/room-service.service';
import { EquipmentTypeEnum } from 'src/app/Manager/Model/Enum/EquipmentType';
import { IRelocationRequestDisplay } from 'src/app/Manager/Model/RelocationRequestDisplay';

@Component({
  selector: 'app-relocations',
  templateUrl: './relocations.component.html',
  styleUrls: ['./relocations.component.scss']
})
export class RelocationsComponent {
  constructor(private roomService: RoomService){}

  displayedColumns: string[] = ['from', 'to', 'equipmentType', 'quantity' ,'startTime', 'duration']; //, 'button'
  @Input() relocationRequests: IRelocationRequestDisplay[]
  newDate: Date
  
  convertEnum(type: number): string {
    return EquipmentTypeEnum[type];
  }

  check24h(date: any):boolean{
    const now = new Date().valueOf()
    const relocation = new Date(date).valueOf()
    var hours = relocation - now
    console.log(hours)
    return true;
  }

}
