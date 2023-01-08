import { ExaminationEvent } from './ExaminationEvent';

export interface SymptomsChanged extends ExaminationEvent {
  symptomId: number;
  status: number;
}
