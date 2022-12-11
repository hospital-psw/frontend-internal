import { EquipmentTypeEnum } from './Enum/EquipmentType';

export interface IRelocationRequestDisplay {
  id: number;
  fromRoomNumber: string;
  toRoomNumber: string;
  FromRoomId: number;
  ToRoomId: number;
  equipmentType: EquipmentTypeEnum;
  quantity: number;
  startTime: Date;
  duration: number;
}
