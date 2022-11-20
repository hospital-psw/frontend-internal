import { IEquipment } from "src/app/Manager/Model/Equipment";
import { IRoom } from "src/app/Manager/Model/Room";

export interface IRecommendedRelocationRequest{
  fromRoomId: number,
  toRoomId: number,
  fromTime: Date,
  toTime: Date,
  duration: number,
}
