import { Doctor } from './Doctor';
import { Patient } from './Patient';
import { IRoom } from '../../Manager/Model/Room';
import { ExaminationType } from '../enum/ExaminationType.enum';

export interface Appointment {
  id: number;
  date: Date;
  endDate: Date;
  duration: number;
  examType: number;
  isDone: boolean;
  room: IRoom;
  patient: Patient;
  doctor: Doctor;
}
