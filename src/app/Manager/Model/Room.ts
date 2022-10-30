import { IBuilding } from './Building';
import { IFloor } from './Floor';
import { IWorkingHours } from './WorkingHours';

export interface IRoom{
  id: number;
  number: string;
  floor: IFloor;
  purpose: string;
  workingHours: IWorkingHours;
}
