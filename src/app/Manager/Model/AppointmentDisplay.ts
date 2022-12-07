import { ExaminationType } from 'src/app/schedule/enum/ExaminationType.enum';

export interface IAppointmentDisplay {
  date: Date;
  duration: number;
  examinationType: ExaminationType;
}
