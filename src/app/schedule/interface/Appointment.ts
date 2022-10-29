import { Doctor } from './Doctor';
import { Patient } from './Patient';
import { IRoom } from '../../Manager/Model/Room';
import { ExaminationType } from '../enum/ExaminationType.enum';

export interface Appointment {
  id: number;
  date: Date;
  duration: number;
  examType: ExaminationType;
  isDone: boolean;
  room: IRoom;
  patient: Patient;
  doctor: Doctor;
}
