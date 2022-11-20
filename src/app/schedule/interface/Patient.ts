import { Role } from './../enum/Role.enum';

export interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  guest: boolean;
  bloodType: number;
}
