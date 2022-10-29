import { ExaminationType } from './../enum/ExaminationType.enum';
import { Room } from "./Room";

export interface ReschedulingAppointmentDTO {
  id: number;
  date: Date;
  duration: number;
  examType: any;
  roomId: number;
  patientId: number;
  //doctorId: number;
}
