import { IBuilding } from "./Building";
import { IFloor } from "./Floor";
import { IWorkingHours } from "./WorkingHours";

export interface IRoom{
  number: number;
  floor: IFloor;
  building: IBuilding;
  workingHous: IWorkingHours;
  purpose: string
}
