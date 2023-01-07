import { DateRange } from './../../schedule/interface/DateRange';
import { Medicament } from './../../medical-treatment/interface/Medicament';

export interface Perscription {
  id: number;
  medicament: Medicament;
  description: string;
  dateRange: DateRange;
}
