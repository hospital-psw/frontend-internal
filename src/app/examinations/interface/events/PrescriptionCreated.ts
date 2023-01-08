import { ExaminationEvent } from './ExaminationEvent';
import { NewPrescription } from '../NewPrescription';

export interface PrescriptionCreated extends ExaminationEvent {
  newPrescription: NewPrescription;
}
