import { BloodType } from './../enum/BloodType.enum';

export interface BloodUnit {
  id: number;
  bloodType: BloodType;
  amount: number;
}
