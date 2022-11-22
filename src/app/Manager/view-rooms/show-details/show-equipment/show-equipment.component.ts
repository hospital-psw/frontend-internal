import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
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
    setInterval(() => {}, 100);
  }

  @Output() notifyRelocation = new EventEmitter();
  @Input() equipment: IEquipment[];
  displayedColumns: string[] = ['typeOfEquipment', 'quantity', 'button'];
  ngOnInit(): void {}

  convertEnum(type: number): string {
    return EquipmentTypeEnum[type];
  }

  relocateEquipment(element: IEquipment) {
    this.notifyRelocation.emit(element);
  }
}
