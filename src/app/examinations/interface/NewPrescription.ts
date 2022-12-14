import { Medicament } from 'src/app/medical-treatment/interface/Medicament';

export interface NewPrescription {
  medicine: Medicament;
  medicamentId: number;
  description: string;
  from: Date;
  to: Date;
}
