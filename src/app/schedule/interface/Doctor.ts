import { IWorkingHours } from 'src/app/Manager/Model/WorkingHours';
import { IRoom } from 'src/app/Manager/Model/Room';
import { Specialization } from './../enum/Specialization.enum';
import { Role } from './../enum/Role.enum';

export interface Doctor {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  specialization: Specialization;
  workingHours: IWorkingHours;
  offfice: IRoom;
}
