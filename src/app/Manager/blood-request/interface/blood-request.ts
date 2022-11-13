import { BloodType } from "src/app/blood-bank/model/blood-type.model";

export interface BloodRequest{
    requestId: number;
    doctor: string;
    message: string;
    bloodType: BloodType;
    amount: number;
    status: number;
  }
  