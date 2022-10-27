import { Component, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { IRoom } from '../Model/Room';
import { IRoomMap } from '../Model/RoomMap';
import { RoomService } from '../service/room-service.service';
import { CameraBuilder } from './model/CameraBuilder';
import { GraphicRoom } from './model/GraphicRoom';
import SceneBuilder from "./model/SceneBuilder"
import { Observable } from 'rxjs';
import {ApplicationRef } from '@angular/core';


@Component({
  selector: 'app-view-rooms',
  templateUrl: './view-rooms.component.html',
  styleUrls: ['./view-rooms.component.scss']
})

export class ViewRoomsComponent implements OnInit {

  constructor(private roomService: RoomService, private cdRef:ChangeDetectorRef, private ref: ApplicationRef) {
    //this.showDetails = false;
    //cdRef.detach();
    //setInterval(() => {
    //  this.cdRef.detectChanges();
    //}, 100);
    
  }

  private scene?: SceneBuilder
  private camera?: CameraBuilder
  private floor: number = -1
  private building: string = ""
  //public clickedRoom? : GraphicRoom
  public clickedRoom? : IRoom
  private renderer? : THREE.WebGLRenderer
  private sub?: Subscription
 


  rooms : IRoomMap[] = []
  public showDetails: boolean = false;

  ngOnInit(): void {

    let selectedCanvas: any = document.querySelector(".canvas")

    this.sub = this.roomService.getRooms().subscribe(data =>{
      this.rooms = data
      this.scene = new SceneBuilder(this.rooms);
    } )

    window.addEventListener('mousedown', (e) => {
      this.handleIntersectClick(e)
    })

    this.camera = new CameraBuilder()

    this.renderer = new THREE.WebGLRenderer({canvas: selectedCanvas});
    this.renderer.setPixelRatio(window.devicePixelRatio)
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
    let holder = document.getElementById("canvas-holder")
    holder?.appendChild(selectedCanvas)
  }

  ngOnDestroy(){
    this.sub?.unsubscribe()
  }

  selectFloor(evt: any){
    this.floor = evt.value
    this.scene?.displayFloor(this.floor, this.building)
  }

  selectHospital(evt: any){
    this.building = evt.value
    this.scene?.displayFloor(this.floor, this.building)
  }

  handleIntersectClick(event: any) {
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    let canvas: any = document.querySelector(".canvas")
    let width = canvas.offsetWidth
    let height = canvas.offsetHeight
    let x = 0
    let y = 0

    let holder = this.renderer?.domElement
    let rect = holder?.getBoundingClientRect()
    if(rect && holder){
      x = ((event.pageX - rect?.left - window.scrollX) / holder?.clientWidth) * 2 - 1
      y = -((event.pageY - rect.top - window.scrollY) / holder.clientHeight) * 2 + 1
    }

    mouse.x = x
    mouse.y = y

    if(this.camera)
      raycaster.setFromCamera(mouse, this.camera.getCamera())

    let intersected = raycaster.intersectObjects(this.scene?.getScene() ? this.scene.getScene().children : [])
    let roomFound = false;
    if(this.scene && intersected.length > 0)
      for(let room of this.scene?.getGraphicRooms()){
        if(this.isRoomClicked(room, intersected)){
          this.clickedRoom = room.getRoomData().room
          roomFound = true;
          this.showDetails = roomFound;
          this.cdRef.detectChanges();
          console.log('eee', this.clickedRoom)
        }
      }
  }
  isRoomClicked(room: GraphicRoom, intersected: any) : boolean{
    if(room.getRoomData().x == intersected[0].object.position.x && room.getRoomData().z == intersected[0].object.position.z)
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
