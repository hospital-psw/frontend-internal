export interface IRelocationRequest {
  fromRoomId: number;
  toRoomId: number;
  startTime?: Date;
  duration: number;
  equipmentId: number;
  quantity: number;
}
