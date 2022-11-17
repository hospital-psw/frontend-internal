import { BloodUnit } from './BloodUnit';
import { TherapyType } from '../enum/TherapyType.enum';

export interface BloodUnitTherapy {
  id: number;
  start: Date;
  end: Date;
  about: string;
  type: TherapyType;
  bloodUnit: BloodUnit;
  amount: number;
}
