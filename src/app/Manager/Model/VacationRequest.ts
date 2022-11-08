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