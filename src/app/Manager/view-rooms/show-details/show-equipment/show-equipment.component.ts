import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { IEquipment } from 'src/app/Manager/Model/Equipment';
import { IRoom } from 'src/app/Manager/Model/Room';
import { RoomService } from '../../../service/room-service.service';
import { EquipmentTypeEnum } from 'src/app/Manager/Model/Enum/EquipmentType';

@Component({
  selector: 'app-show-equipment',
  templateUrl: './show-equipment.component.html',
  styleUrls: ['./show-equipment.component.scss'],
})
export class ShowEquipmentComponent implements OnInit {
  constructor(private roomService: RoomService) {
    setInterval(() => {
    }, 100);
  }

  @Input() room: IRoom;
  displayedColumns: string[] = ['typeOfEquipment', 'quantity', 'button'];
  public equipment: IEquipment[] = [];
  ngOnInit(): void {
    this.roomService.getEquipment(this.room.id).subscribe((data) => {
      this.equipment = data;
      console.log(this.room.id);
    });
  }

  convertEnum(type: number): string {
    return EquipmentTypeEnum[type];
  }

  ngOnChanges(changes: SimpleChanges) {
    this.roomService.getEquipment(this.room.id).subscribe((data) => {
      this.equipment = data;
      console.log(this.room.id);
    });
  }
}
