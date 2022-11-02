import { ExaminationType } from '../enum/ExaminationType.enum';
import { IRoom } from '../../Manager/Model/Room';

export interface ScheduleAppointmentDTO {
  date: Date;
  examType: number;
  patientId:number;
  doctorId:number;
}
