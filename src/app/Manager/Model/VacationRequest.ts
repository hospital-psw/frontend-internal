import { Doctor } from '../../schedule/interface/Doctor';

export interface IVacationRequest {
  id: number;
  doctor: Doctor;
  from: Date;
  to: Date;
  status: string;
  comment: string;
  urgent: boolean;
  managerComment: string;
}
