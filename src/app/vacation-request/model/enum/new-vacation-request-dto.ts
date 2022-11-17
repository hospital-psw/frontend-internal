import { VacationRequestStatus } from "./vacation-request-status";

export interface NewVacationRequestDTO {
    doctorId: number;
    from: Date;
    to: Date;
    status: VacationRequestStatus;
    comment: string;
    urgent:boolean;
}
