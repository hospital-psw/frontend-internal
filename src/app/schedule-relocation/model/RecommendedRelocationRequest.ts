import { IEquipment } from "src/app/Manager/Model/Equipment";
import { IRoom } from "src/app/Manager/Model/Room";

export interface IRecommendedRelocationRequest{
  fromRoom: IRoom,
  toRoom: IRoom,
  startDate: Date,
  endDate: Date,
  duration: number,
  equipment: IEquipment,
  quantity: number
}
