import { MonthlyTransfer } from './MonthlyTransfer.model';

export class BloodBank {
  public id: number = 0;
  public name: string = '';
  public email: string = '';
  public apiUrl: string = '';
  public apiKey: string = '';
  public amount: number = 0;
  public getBloodTypeAvailability: string = '';
  public getBloodTypeAndAmountAvailability: string = '';
  public frequently: number = 0;
  public reportTo: Date;
  public reportFrom: Date;
  public monthlyTransfer: MonthlyTransfer;

  public constructor(obj?: any) {
    if (obj) {
      this.id = obj.id;
      this.name = obj.name;
      this.email = obj.email;
      this.apiUrl = obj.apiUrl;
      this.apiKey = obj.apiKey;
      this.amount = obj.amount;
      this.getBloodTypeAvailability = obj.getBloodTypeAvailability;
      this.getBloodTypeAndAmountAvailability =
        obj.getBloodTypeAndAmountAvailability;
      this.frequently = obj.frequently;
      this.reportFrom = obj.reportFrom;
      this.reportTo = obj.reportTo;
      this.monthlyTransfer = obj.monthlyTransfer;
    }
  }
}
