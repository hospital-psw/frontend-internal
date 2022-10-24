import { IBuilding } from "./Building";
import { IFloor } from "./Floor";

export interface IRoom{
  number: number;
  floor: IFloor;
  building: IBuilding;
  x: number;
  z: number;
}
