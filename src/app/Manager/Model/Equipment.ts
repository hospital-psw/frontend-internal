import { IRoom } from './Room';

export interface IEquipment{
  room: IRoom,
  equipmentType: string,
  quantity: number
}
