import { BloodBank } from 'src/app/blood-bank/model/blood-bank.model';

export interface ITender {
  id: Number;
  status: Number;
  dueDate: Date;
  tenderWinner: any;
  offers: any;
  items: any;
  dateUpdated: Date;
}
