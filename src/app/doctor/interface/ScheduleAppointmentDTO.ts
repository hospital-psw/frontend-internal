import { ExaminationType } from '../enum/ExaminationType.enum';
import { Room } from './Room';

export interface ScheduleAppointmentDTO {
  id: number;
  date: Date;
  duration: number;
  examType: ExaminationType;
  isDone: boolean;
  room: Room;
}
