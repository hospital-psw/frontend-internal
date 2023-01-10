import { VacationRequest } from 'src/app/vacation-request/model/interface/vacation-request';
import { Appointment } from './Appointment';
import { DisplayConsiliumDto } from './DisplayConsiliumDto';

export interface DoctorSchedule {
  appointments: Appointment[];
  consiliums: DisplayConsiliumDto[];
  vacations: VacationRequest[];
}
