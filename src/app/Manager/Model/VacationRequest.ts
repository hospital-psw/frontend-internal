<<<<<<< HEAD
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
=======
import { IUser } from "./User";

export interface IVacationRequest {
    doctor : IUser;
    from : Date;
    to : Date;
    status: string;
    comment: string;
    urgent: boolean;
    managerComment: string;
}
>>>>>>> 74a2ecb (Implemented UI for showing requests and modal dialog for request rejection)
