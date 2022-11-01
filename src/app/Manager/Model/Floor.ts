import { IBuilding } from './Building';

export interface IFloor {
  id: number;
  number: number;
  purpose: string;
  building: IBuilding;
}
