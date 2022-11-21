import {BloodType} from '../interface/BloodType.enum';

export interface CreateAcquisitionDTO {
    doctorId: number;
    date: Date;
    bloodType: BloodType;
    amount: number;
    reason:string;
  }
  

