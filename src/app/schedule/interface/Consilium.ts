import { IRoom } from 'src/app/Manager/Model/Room';
import { Doctor } from './Doctor';

export interface Consilium {
  id: number;
  startDateTime: Date;
  endDateTime: Date;
  topic: string;
  duration: number;
  room: IRoom;
  doctors: Doctor[];
}
