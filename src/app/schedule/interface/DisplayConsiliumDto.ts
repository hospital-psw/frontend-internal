import { IRoom } from 'src/app/Manager/Model/Room';

export interface DisplayConsiliumDto {
  id: number;
  startDateTime: Date;
  endDateTime: Date;
  topic: string;
  duration: number;
  room: IRoom;
}
