import { BloodType } from './BloodType.enum';

export interface CreateExpenditureDTO {
  doctorId: number;
  bloodType: number;
  amount: number;
  reason: string;
}
