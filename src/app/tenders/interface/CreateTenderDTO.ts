import { BloodType } from './BloodType.enum';

export interface CreateTenderDTO {
  items: TenderItem[];
  dueDate: Date;
}

export interface TenderItem {
  money: Money,
  bloodType: number,
  quantity: number
}

export interface Money {
  amount: number,
  currency: number
}
