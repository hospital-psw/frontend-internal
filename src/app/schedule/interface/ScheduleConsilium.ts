import { Specialization } from './../enum/Specialization.enum';
import { DateRange } from './DateRange';

export interface ScheduleConsilium {
  dateRange: DateRange;
  topic: string;
  selectedDoctors: number[];
  selectedSpecializations: number[];
  duration: number;
  doctorId: number;
  roomId: number;
}
