import { IBuilding } from "./Building"

export interface IFloor{
  number: number,
  purpose: string
  building: IBuilding
}
