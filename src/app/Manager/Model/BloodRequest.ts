import { BloodType } from 'src/app/medical-treatment/enum/BloodType.enum';

export class BloodRequest {
  id: number;
  doctor: any;
  date: Date;
  bloodType: BloodType;
  amount: number;
  reason: string;
  managerComment: string;

  public constructor(obj?: any) {
    if (obj) {
      this.id = obj.id;
      this.doctor = obj.doctor;
      this.date = obj.date;
      this.bloodType = obj.bloodType;
      this.amount = obj.amount;
      this.reason = obj.reason;
      this.managerComment = obj.managerComment;
    }
  }
}
