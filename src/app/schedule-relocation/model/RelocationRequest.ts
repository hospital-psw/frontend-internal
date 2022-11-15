import { IEquipment } from "src/app/Manager/Model/Equipment";
import { IRoom } from "src/app/Manager/Model/Room";

export interface IRelocationRequest{
  fromRoomId: number,
  toRoomId: number,
  startTime?: Date,
  duration: number,
  equipmentId: number,
  quantity: number
}
