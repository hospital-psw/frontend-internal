import { BloodType } from './BloodType.enum';

export interface CreateTenderDTO {
  bloodType: number;
  moneyAmount: number;
  quantity: number;
  endDate: Date;
}
