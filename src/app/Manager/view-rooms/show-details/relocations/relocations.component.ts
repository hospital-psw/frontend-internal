import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RoomService } from '../../../service/room-service.service';
import { EquipmentTypeEnum } from 'src/app/Manager/Model/Enum/EquipmentType';
import { IRelocationRequestDisplay } from 'src/app/Manager/Model/RelocationRequestDisplay';
import { RelocationRequestService } from 'src/app/Manager/service/relocation-request-service';
import { NodeStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { IRoom } from 'src/app/Manager/Model/Room';

@Component({
  selector: 'app-relocations',
  templateUrl: './relocations.component.html',
  styleUrls: ['./relocations.component.scss'],
})
export class RelocationsComponent {
  constructor(private relocationRequestService: RelocationRequestService){}

  displayedColumns: string[] = ['from', 'equipmentType', 'quantity' ,'startTime', 'duration', 'button']; //, 'to'
  @Input() relocationRequests: IRelocationRequestDisplay[]
  @Input() room:IRoom
  @Output() notify = new EventEmitter();
  newDate: Date
  relocations: IRelocationRequestDisplay[]
  
  ngOnInit(): void {
    this.relocationRequestService.getRelocationRequests(this.room.id).subscribe((data) => { this.relocationRequests = data;})
  }

  convertEnum(type: number): string {
    return EquipmentTypeEnum[type];
  }

  check24h(date: any):boolean{
    const now = new Date().valueOf()
    const relocation = new Date(date).valueOf()
    var hours = relocation - now
    if(hours > 86400000){
      return true;
    }
    return false;
  }

  decline(requestId: number){
    this.relocationRequestService.decline(requestId).subscribe((res) => {
      this.notify.emit();
      this.ngOnInit();
    });
    
  }


}
