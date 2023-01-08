import { Appointment } from './../../schedule/interface/Appointment';
export interface Anamnesis {
  id: number;
  description: string;
  appointment: Appointment;
}
