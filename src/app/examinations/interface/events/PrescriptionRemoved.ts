import { ExaminationEvent } from './ExaminationEvent';

export interface PrescriptionRemoved extends ExaminationEvent {
  prescriptionId: number;
}
