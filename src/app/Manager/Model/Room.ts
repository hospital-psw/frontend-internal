import { IBuilding } from "./Building";

export interface IRoom{
  number: number;
  floor: number;
  building: IBuilding;
  x: number;
  z: number;
}
