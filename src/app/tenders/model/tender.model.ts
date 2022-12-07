import { BloodBank } from 'src/app/blood-bank/model/blood-bank.model';

export interface ITender {
  id: Number;
  status: Number;
  dueDate: Date;
  tenderWinner: BloodBank;
  offers: any;
  items: any;
}
