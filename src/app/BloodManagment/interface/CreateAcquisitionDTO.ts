import {BloodType} from '../interface/BloodType.enum';

export interface CreateAcquisitionDTO {
    doctorId: number;
    date: Date;
    bloodType: string;
    amount: number;
    reason:string;
  }
  

