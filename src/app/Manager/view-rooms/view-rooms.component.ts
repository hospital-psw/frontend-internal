import { Component, OnInit } from '@angular/core';
import * as THREE from "three";
import { Vector, Vector2 } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { IRoom } from '../Model/Room';
import { CameraBuilder } from './model/CameraBuilder';
import { GraphicRoom } from './model/GraphicRoom';
import SceneBuilder from "./model/SceneBuilder"


@Component({
  selector: 'app-view-rooms',
  templateUrl: './view-rooms.component.html',
  styleUrls: ['./view-rooms.component.scss']
})

export class ViewRoomsComponent implements OnInit {

  constructor() { }

  private scene?: SceneBuilder
  private camera?: CameraBuilder
  private floor: number = -1
  private building: string = ""
  private clickedRoom? : GraphicRoom
  private renderer? : THREE.WebGLRenderer

  rooms : IRoom[] = [
    {
      number: 101,
      floor: 1,
      building: {
        name: "Hospital1",
        address: "fruskogorska 5"
      },
      x: 1,
      z: 1
    },
    {
      number: 102,
      floor: 1,
      building: {
        name: "Hospital1",
        address: "fruskogorska 5"
      },
      x: 2,
      z: 1
    },
    {
      number: 103,
      floor: 1,
      building: {
        name: "Hospital1",
        address: "fruskogorska 5"
      },
      x: 3,
      z: 1
    },
    {
      number: 104,
      floor: 1,
      building: {
        name: "Hospital1",
        address: "fruskogorska 5"
      },
      x: 1,
      z: 3
    },
    {
      number: 105,
      floor: 1,
      building: {
        name: "Hospital1",
        address: "fruskogorska 5"
      },
      x: 2,
      z: 3
    },
    {
      number: 106,
      floor: 1,
      building: {
        name: "Hospital1",
        address: "fruskogorska 5"
      },
      x: 3,
      z: 3
    },
    {
      number: 206,
      floor: 2,
      building: {
        name: "Hospital1",
        address: "fruskogorska 5"
      },
      x: 3,
      z: 3
    }
  ]

  ngOnInit(): void {

    window.addEventListener('mousedown', (e) => {
      this.handleIntersectClick(e)
    })

    this.scene = new SceneBuilder(this.rooms);
    this.camera = new CameraBuilder()

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(2*window.innerWidth/3, 2*window.innerHeight/3);
    document.body.appendChild(this.renderer.domElement);

    const controls = new OrbitControls(this.camera.getCamera(), this.renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.update();

    const context = this

    const animate = function () {
      requestAnimationFrame(animate);

      //cube.rotation.x += 0.01;
      //cube.rotation.y += 0.01;

      if(context.scene && context.camera && context.renderer)
        context.renderer.render(context.scene.getScene(), context.camera.getCamera());
    };
    animate();
  }

  selectFloor(evt: any){


    console.log('okida floor ', evt)
    this.floor = evt.value
    this.scene?.displayFloor(this.floor, this.building)
  }

  selectHospital(evt: any){
    console.log('okida hospital ', evt)
    this.building = evt.value
    this.scene?.displayFloor(this.floor, this.building)
  }


  handleIntersectClick(event: any) {
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    let canvas: any = document.querySelector("canvas")
    let width = canvas.offsetWidth
    let height = canvas.offsetHeight

    let x = (event.clientX / width) * 2 - 1
    let y = -(event.clientY / height) * 2 + 1

    mouse.x = x
    mouse.y = y

    if(this.camera)
      raycaster.setFromCamera(mouse, this.camera.getCamera())

    let intersected = raycaster.intersectObjects(this.scene?.getScene() ? this.scene.getScene().children : [])

    if(this.scene && intersected.length > 0)
      for(let room of this.scene?.getGraphicRooms()){
        if(this.isRoomClicked(room, intersected))
          this.clickedRoom = room
      }
  }

  isRoomClicked(room: GraphicRoom, intersected: any) : boolean{
    if(room.getRoomData().x == intersected[0].object.position.x && room.getRoomData().floor == intersected[0].object.position.y && room.getRoomData().z == intersected[0].object.position.z)
      return true
    return false
  }

  addLight(x: number, y: number, z:number, scene:THREE.Scene): void {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(x,y,z);
    scene.add(light);
  }

  makeInstance(geometry: THREE.BoxGeometry, color: THREE.Color, x:number, y:number, z:number, scene:THREE.Scene): THREE.Mesh{
    const material = new THREE.MeshPhongMaterial({
      color,
      opacity: 0.5,
      transparent: true,
    });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    cube.position.set(x, y, z);

    return cube;
  }

}
