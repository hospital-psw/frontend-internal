import {BloodType} from '../interface/BloodType.enum';

export interface CreateAcquisitionDTO {
    doctorId: number;
    date: Date;
    bloodType: number;
    amount: number;
    reason:string;
  }
  

