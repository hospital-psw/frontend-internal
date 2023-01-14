import { Appointment } from './../../schedule/interface/Appointment';
import { Perscription } from './Perscription';
import { Symptom } from './Symptom';
export interface Anamnesis {
  id: number;
  description: string;
  appointment: Appointment;
  symptoms: Symptom[];
  prescriptions: Perscription[];
}
