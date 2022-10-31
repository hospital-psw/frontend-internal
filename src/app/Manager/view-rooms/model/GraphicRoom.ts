import { IRoom } from '../../Model/Room';
import { IRoomMap } from '../../Model/RoomMap';

export class GraphicRoom {
  private graphicRoom: THREE.Mesh;
  private roomData: IRoomMap;

  constructor(element: THREE.Mesh, roomData: IRoomMap) {
    this.graphicRoom = element;
    this.roomData = roomData;
  }

  getGraphicRoom() {
    return this.graphicRoom;
  }

  getRoomData() {
    return this.roomData;
  }
}
