import { ExaminationType } from '../enum/ExaminationType.enum';
import { IRoom } from '../../Manager/Model/Room';

export interface ScheduleAppointmentDTO {
  date: Date;
  duration: number;
  examType: ExaminationType;
  room: IRoom;
}
