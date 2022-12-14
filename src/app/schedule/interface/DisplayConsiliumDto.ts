import { IRoom } from 'src/app/Manager/Model/Room';

export interface DisplayConsiliumDto {
  id: number;
  dateTime: Date;
  topic: string;
  duration: number;
  room: IRoom;
}
