import { IBuilding } from './Building';
import { IFloor } from './Floor';
import { IWorkingHours } from './WorkingHours';

export interface IRoom {
  id: number;
  number: number;
  floor: IFloor;
  purpose: string;
  workigHours: IWorkingHours;
}
