import { IEquipment } from "src/app/Manager/Model/Equipment";
import { IRoom } from "src/app/Manager/Model/Room";

export interface IRecommendedRelocationRequest{
  fromRoom: number,
  toRoom: number,
  fromTime: Date,
  toTime: Date,
  duration: number,
}
