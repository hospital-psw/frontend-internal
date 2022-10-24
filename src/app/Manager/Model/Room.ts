import { IBuilding } from "./Building";
import { IFloor } from "./FLoor";

export interface IRoom{
  number: number;
  floor: IFloor;
  building: IBuilding;
  x: number;
  z: number;
}
