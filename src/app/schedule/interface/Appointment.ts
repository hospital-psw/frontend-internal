import { Doctor } from './Doctor';
import { Patient } from './Patient';
import { Room } from './Room';
import { ExaminationType } from '../enum/ExaminationType.enum';

export interface Appointment {
  id: number;
  date: Date;
  duration: number;
  examType: ExaminationType;
  isDone: boolean;
  room: Room;
  patient: Patient;
  doctor: Doctor;
}
