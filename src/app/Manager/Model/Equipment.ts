import { IRoom } from './Room';
import { IRoomMap } from './RoomMap';

export interface IEquipment {
  id: number;
  equipmentType: number;
  quantity: number;
  room: IRoom;
  reservedQuantity: number;
}
