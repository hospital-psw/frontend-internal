import { Component, OnInit, Input } from '@angular/core';
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
  constructor(private roomService: RoomService) {}

  @Input() room: IRoom;
  displayedColumns: string[] = ['typeOfEquipment', 'quantity', 'button'];
  public equipment: IEquipment[] = [];
  ngOnInit(): void {
    console.log(this.room.id);
    this.roomService.getEquipment(this.room.id).subscribe((data) => {
      this.equipment = data;
    });
  }

  convertEnum(type: number): string {
    return EquipmentTypeEnum[type];
  }
}
