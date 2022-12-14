import { BloodType } from './BloodType.enum';

export interface CreateUrgentRequestDTO {
  bloodType: number;
  amount: number;
  http: boolean;
}
