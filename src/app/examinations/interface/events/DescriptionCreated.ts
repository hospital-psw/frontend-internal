import { ExaminationEvent } from './ExaminationEvent';

export interface DescriptionCreated extends ExaminationEvent {
  description: string;
}
