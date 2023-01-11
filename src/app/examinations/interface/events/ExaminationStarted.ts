import { ExaminationEvent } from './ExaminationEvent';

export interface ExaminationStarted extends ExaminationEvent {
  appointmentId: number;
}
