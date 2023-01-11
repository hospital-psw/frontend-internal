import { ExaminationEvent } from './ExaminationEvent';

export interface ExaminationFinished extends ExaminationEvent {
  appointmentId: number;
}
