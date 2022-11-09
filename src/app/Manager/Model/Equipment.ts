import { IRoom } from './Room';

export interface IEquipment{
  room: IRoom,
  equipmentType: number,
  quantity: number
}
