import { Doctor } from 'src/app/schedule/interface/Doctor';
import { VacationRequestStatus } from '../enum/vacation-request-status';

export interface VacationRequest {
  id: number;
  doctor: Doctor;
  from: Date;
  to: Date;
  status: VacationRequestStatus;
  comment: string;
  urgent: boolean;
  managerComent: string;
}
