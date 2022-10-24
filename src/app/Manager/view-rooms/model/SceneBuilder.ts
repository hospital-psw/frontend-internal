import * as THREE from "three";
import {
  CubeTextureLoader,
  Vector,
  Vector2
} from 'three';
import {
  OrbitControls
} from 'three/examples/jsm/controls/OrbitControls.js';
import {
  IRoom
} from "../../Model/Room";
import {
  GraphicRoom
} from "./GraphicRoom";
import {
  FontLoader
} from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

export class SceneBuilder {

  private scene: THREE.Scene;
  private graphicRooms: GraphicRoom[] = []
  constructor(private readonly rooms: IRoom[]) {
    this.scene = new THREE.Scene();

    this.scene.background = new THREE.Color('gray'); //siva pozadina

    this.addLight(-1, 2, 4);
    this.addLight(1, -1, -2);

  }

  resetScene() {
    this.scene.clear()
    this.addLight(-1, 2, 4);
    this.addLight(1, -1, -2);
  }

  displayFloor(floor: number, building: string) {
    this.resetScene()
    this.createHallway()
    console.log(floor, building, this.rooms)
    for (let i = 0; i < this.rooms.length; i++) {
      if (this.rooms[i].floor.number == floor && this.rooms[i].building.name == building) {
        console.log(this.rooms[i])
        const box = new THREE.BoxGeometry(1, 1, 1)
        const color = new THREE.Color().setHSL(0 / 8, 1, .5)
        var mesh = this.createRoom(box, color, this.rooms[i].x, this.rooms[i].floor.number, this.rooms[i].z, this.rooms[i].number.toString())
        this.graphicRooms.push(new GraphicRoom(mesh, this.rooms[i]))
      }
    }
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


    loader.load('assets/Fonts/Roboto_Black_Regular.json', function ( font ) {

      var geometry = new TextGeometry( roomNum, {
        font: font,
        size: 0.2,
        height: 0.01,
      } );

      geometry.center()
      var material = new THREE.MeshBasicMaterial({color: 0x000000});
      var mesh = new THREE.Mesh(geometry, material);
      cube.add(mesh);
      context.scene.add(cube);

    } );

    return cube;
  }

  createHallway() {
    this.createRoom(new THREE.BoxGeometry(3, 1, 1), new THREE.Color().setHSL(2/8, .5, .7), 2, 1, 2, "Hallway")
    return this
  }


  addLight(x: number, y: number, z: number): void {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(x, y, z);
    this.scene.add(light);
  }


  getScene() {
    return this.scene
  }

  getGraphicRooms(){
    return this.graphicRooms;
  }

}



export default SceneBuilder
