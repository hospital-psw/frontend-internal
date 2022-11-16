import { BloodType } from 'src/app/blood-bank/model/blood-type.model';

export interface BloodRequest {
  id: number;
  doctor: object;
  date: Date;
  bloodType: BloodType;
  amount: number;
  reason: string;
}
