import { IRoom } from "../../Model/Room";


export class GraphicRoom {

  private graphicRoom: THREE.Mesh
  private roomData: IRoom

  constructor(element: THREE.Mesh, roomData: IRoom) {
    this.graphicRoom = element
    this.roomData = roomData
  }

  getGraphicRoom() {
    return this.graphicRoom
  }

  getRoomData(){
    return this.roomData
  }
}
