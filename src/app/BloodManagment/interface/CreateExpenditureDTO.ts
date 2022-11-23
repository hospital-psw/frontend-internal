import { BloodType } from "./BloodType.enum";

export interface CreateExpenditureDTO {
    doctorId: number;
    date: Date;
    bloodType: string;
    amount: number;
    reason:string;
  }
  