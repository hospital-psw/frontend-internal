import * as THREE from 'three';
import { CubeTextureLoader, Vector, Vector2 } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { IRoom } from '../../Model/Room';
import { GraphicRoom } from './GraphicRoom';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { IRoomMap } from '../../Model/RoomMap';

export class SceneBuilder {
  private scene: THREE.Scene;
  private graphicRooms: GraphicRoom[] = []
  private rooms: IRoomMap[] = []
  constructor() {
    this.scene = new THREE.Scene();

    this.scene.background = new THREE.Color('transparent');

    this.addLight(-1, 2, 4);
    this.addLight(1, -1, -2);
  }

  resetScene() {
    this.scene.clear();
    this.addLight(-1, 2, 4);
    this.addLight(1, -1, -2);
  }

  display(floor: number, building: string) {
    this.graphicRooms = []
    this.resetScene()
    if(floor === -1 && building === "") return
    this.createHallway()
    for (let i = 0; i < this.rooms.length; i++) {
        var mesh = this.createMesh(this.rooms[i], floor)
        this.graphicRooms.push(new GraphicRoom(mesh, this.rooms[i]))
    }
  }

  createMesh(room: IRoomMap, floor: number){
    const box = new THREE.BoxGeometry(room.width, 1, room.depth)
    const color = new THREE.Color().setHSL(0 / 8, 1, .5)
    if(floor === -1)
      return this.createRoom(box, color, room.x, room.room.floor.number, room.z, room.room.number.toString())
    return this.createRoom(box, color, room.x, 1, room.z, room.room.number.toString())
  }

  createRoom(geometry: THREE.BoxGeometry, color: THREE.Color, x: number, y: number, z: number, roomNum: string) : THREE.Mesh {
    const material = new THREE.MeshPhongMaterial({
      color,
      opacity: 0.5,
      transparent: true,
    });

    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(x, y, z);
    const context = this;
    const loader = new FontLoader();

    loader.load('assets/Fonts/Roboto_Black_Regular.json', function (font) {
      var geometry = new TextGeometry(roomNum, {
        font: font,
        size: 0.2,
        height: 0.01,
      });

      geometry.center();
      var material = new THREE.MeshBasicMaterial({ color: 0x000000 });
      var mesh = new THREE.Mesh(geometry, material);
      cube.add(mesh);
      context.scene.add(cube);
    });

    return cube;
  }

  createHallway() {
    this.createRoom(
      new THREE.BoxGeometry(3, 1, 1),
      new THREE.Color().setHSL(2 / 8, 0.5, 0.7),
      2,
      1,
      2,
      'Hallway'
    );
    return this;
  }

  addLight(x: number, y: number, z: number): void {
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(x, y, z);
    this.scene.add(light);
  }

  getScene() {
    return this.scene;
  }

  getGraphicRooms() {
    return this.graphicRooms;
  }

  setRooms(rooms: IRoomMap[]){
    console.log('setujem', rooms)
    this.rooms = rooms
    console.log('rezultat', this.rooms)
  }

}

export default SceneBuilder;
