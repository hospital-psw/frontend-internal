import { IEquipment } from 'src/app/Manager/Model/Equipment';
import { IRoom } from 'src/app/Manager/Model/Room';

export interface IRecommendedRelocationRequest {
  roomsId: number[];
  fromTime: Date;
  toTime: Date;
  duration: number;
}
