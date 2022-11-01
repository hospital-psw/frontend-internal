import { Specialization } from './../enum/Specialization.enum';
import { Role } from './../enum/Role.enum';

export interface Doctor {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  specialization: Specialization;
}