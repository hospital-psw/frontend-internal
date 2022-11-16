import { TherapyType } from '../enum/TherapyType.enum';
import { Medicament } from './Medicament';
export interface MedicamentTherapy {
  id: number;
  start: Date;
  end: Date;
  about: string;
  type: TherapyType;
  medicament: Medicament;
  amount: number;
}
