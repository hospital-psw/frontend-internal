import { ExaminationType } from "../enum/ExaminationType.enum";
import { Room } from "./Room";

export interface ScheduleAppointmentDTO {
  date: Date;
  duration: number;
  examType: ExaminationType;
  room: Room;
}
