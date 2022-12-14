import { NewPrescription } from './NewPrescription';

export interface NewAnamnesis {
  appointmentId: number;
  description: string;
  newPrescriptions: NewPrescription[];
  symptomIds: number[];
}
