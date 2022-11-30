import {
  Component,
  OnInit,
  Output,
  ChangeDetectorRef,
  OnDestroy,
  AfterContentChecked,
} from '@angular/core';
import { Subscription } from 'rxjs';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { IRoom } from '../Model/Room';
import { IRoomMap } from '../Model/RoomMap';
import { RoomService } from '../service/room-service.service';
import { CameraBuilder } from './model/CameraBuilder';
import { GraphicRoom } from './model/GraphicRoom';
import SceneBuilder from './model/SceneBuilder';
import { Observable } from 'rxjs';
import { ApplicationRef } from '@angular/core';
import { TorusGeometry } from 'three';
import { IBuilding } from '../Model/Building';
import { ISearchCriteriaDto } from '../Model/Dto/SearchCriteriaDto';
import { ToastrService } from 'ngx-toastr';
import { IEquipment } from '../Model/Equipment';
import { IRelocationRequestDisplay } from '../Model/RelocationRequestDisplay';
import { RelocationRequestService } from '../service/relocation-request-service';
import { IAppointmentDisplay } from '../Model/AppointmentDisplay';
import { trackByHourSegment } from 'angular-calendar/modules/common/util';
import { AppointmentService } from '../service/appointment-service';
import { IRenovationRequestDisplay } from '../Model/RenovationRequestDisplay';

@Component({
  selector: 'app-view-rooms',
  templateUrl: './view-rooms.component.html',
  styleUrls: ['./view-rooms.component.scss'],
})
export class ViewRoomsComponent
  implements OnInit, OnDestroy, AfterContentChecked
{
  constructor(
    private roomService: RoomService,
    private cdRef: ChangeDetectorRef,
    private ref: ApplicationRef,
    private toastr: ToastrService,
    private relocationRequestService: RelocationRequestService,
    private appointmentService: AppointmentService
  ) {}

  private scene?: SceneBuilder;
  private camera?: CameraBuilder;
  public floor: number = -1;
  public building: number = -1;
  public clickedRoom?: IRoom;
  private renderer?: THREE.WebGLRenderer;
  private sub?: Subscription;

  element: IEquipment;
  doRelocate: boolean = false;
  doRenovate: boolean = false
  rooms: IRoomMap[] = [];
  equipments: IEquipment[] = [];
  buildings: IBuilding[] = [];
  public showDetails: boolean = false;
  public showBuildingDetails = false;
  public showFloorDetails = false;
  public showRoomDetails: boolean = false;
  public showSearchedRooms: boolean = false;
  public switchDetails: number; //0 - building; 1 - floor; 2 - room; 3 - searched rooms
  public clicked: IRoom = {
    id: -1,
    number: '101',
    floor: {
      id: 1,
      number: 1,
      purpose: 'hirurgija',
      building: {
        id: 4,
        name: 'Hospital1',
        address: 'Janka cmelika 27 Novi Sad',
      },
    },
    purpose: 'operaciona sala',
    workingHours: { id: 1, start: new Date(), end: new Date() },
  };

  selectedEquipment: string = '-1';
  public searchedRooms: IRoom[] = [];
  relocationRequests: IRelocationRequestDisplay[] = []
  appointments: IAppointmentDisplay[] = []
  renovations: IRenovationRequestDisplay[] = []

  ngOnInit(): void {
    let selectedCanvas: any = document.querySelector('.canvas');
    this.scene = new SceneBuilder();
    this.roomService
      .getBuildings()
      .subscribe((data) => (this.buildings = data));
    window.addEventListener('mousedown', (e) => {
      this.handleIntersectClick(e);
    });

    this.camera = new CameraBuilder();

    this.renderer = new THREE.WebGLRenderer({
      canvas: selectedCanvas,
      antialias: true,
      preserveDrawingBuffer: true,
      alpha: true,
    });
    this.renderer.setPixelRatio(
      window.devicePixelRatio ? window.devicePixelRatio : 1
    );
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    const controls = new OrbitControls(
      this.camera.getCamera(),
      this.renderer.domElement
    );
    controls.target.set(0, 0, 0);
    controls.update();

    const context = this;

    const animate = function () {
      requestAnimationFrame(animate);

      //cube.rotation.x += 0.01;
      //cube.rotation.y += 0.01;

      if (context.scene && context.camera && context.renderer)
        context.renderer.render(
          context.scene.getScene(),
          context.camera.getCamera()
        );
    };
    animate();
    let holder = document.getElementById('canvas-holder');
    holder?.appendChild(selectedCanvas);
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  ngAfterContentChecked() {
    this.cdRef.detectChanges();
  }

  selectFloor(evt: any) {
    this.showBuildingDetails = false;
    this.showFloorDetails = true;
    this.showRoomDetails = false;
    this.showSearchedRooms = false;
    this.switchDetails = 1;
    this.floor = evt.value;
    this.clicked.id = -1;
    this.getRooms(this.building, this.floor);
  }

  selectHospital(evt: any) {
    //this.floor = -1;
    this.showBuildingDetails = true;
    this.showFloorDetails = false;
    this.showRoomDetails = false;
    this.showSearchedRooms = false;
    this.switchDetails = 0;
    this.building = evt.value;
    this.clicked.id = -1;
    this.getRooms(this.building, this.floor);
  }

  getRooms(building: number, floor: number) {
    if (building !== -1 && floor === -1) {
      this.roomService.getBuilding(building).subscribe((data) => {
        this.rooms = data;
        this.scene?.setRooms(this.rooms);
        this.scene?.display(this.floor, this.building, this.clicked.id);
        this.clickedRoom = this.rooms[0].room;
      });
    }
    if (building !== -1 && floor !== -1) {
      this.roomService
        .getRooms(building, floor.toString())
        .subscribe((data) => {
          this.rooms = data;
          this.scene?.setRooms(this.rooms);
          this.scene?.display(this.floor, this.building, this.clicked.id);
          this.clickedRoom = this.rooms[0].room;
        });
    }
  }

  handleIntersectClick(event: any) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let canvas: any = document.querySelector('.canvas');
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    let x = 0;
    let y = 0;

    let holder = this.renderer?.domElement;
    let rect = holder?.getBoundingClientRect();
    if (rect && holder) {
      x =
        ((event.pageX - rect?.left - window.scrollX) / holder?.clientWidth) *
          2 -
        1;
      y =
        -((event.pageY - rect.top - window.scrollY) / holder.clientHeight) * 2 +
        1;
    }

    mouse.x = x;
    mouse.y = y;

    if (this.camera) raycaster.setFromCamera(mouse, this.camera.getCamera());

    let intersected = raycaster.intersectObjects(
      this.scene?.getScene() ? this.scene.getScene().children : []
    );
    let roomFound = false;
    if (this.scene && intersected.length > 0)
      for (let room of this.scene?.getGraphicRooms()) {
        if (this.isRoomClicked(room, intersected)) {
          this.clickedRoom = room.getRoomData().room;
          roomFound = true;
          this.showDetails = roomFound;
          //get details for room
          this.roomService
            .getEquipment(this.clickedRoom.id)
            .subscribe((data) => {
              this.equipments = data;
            });
          this.relocationRequestService.getRelocationRequests(this.clickedRoom.id).subscribe((data) => { this.relocationRequests = data;})
          this.appointmentService.getAppointments(this.clickedRoom.id).subscribe((data) => {this.appointments = data;})
          // pozovem servis da dobavim sve renovacije
          this.cdRef.detectChanges();
          this.showFloorDetails = false;
          this.showBuildingDetails = false;
          this.showRoomDetails = roomFound;
          this.showSearchedRooms = false;
          this.switchDetails = 2;
        }
      }
    //this.showRoomDetails = roomFound;
  }
  isRoomClicked(room: GraphicRoom, intersected: any): boolean {
    if (this.doCoordinatesOverlap(room, intersected)) return true;
    return false;
  }

  doCoordinatesOverlap(room: GraphicRoom, intersected: any) {
    if (this.floor === -1) {
      if (
        room.getRoomData().x == intersected[0].object.position.x &&
        room.getRoomData().room.floor.number ===
          intersected[0].object.position.y &&
        room.getRoomData().z == intersected[0].object.position.z
      )
        return true;
      return false;
    }
    if (
      room.getRoomData().x == intersected[0].object.position.x &&
      room.getRoomData().z == intersected[0].object.position.z
    )
      return true;
    return false;
  }

  addLight(x: number, y: number, z: number, scene: THREE.Scene): void {
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(x, y, z);
    scene.add(light);
  }

  makeInstance(
    geometry: THREE.BoxGeometry,
    color: THREE.Color,
    x: number,
    y: number,
    z: number,
    scene: THREE.Scene
  ): THREE.Mesh {
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

  updateView() {
    console.log('okinuo edit');
    this.roomService.getBuilding(this.building).subscribe((data) => {
      this.rooms = data;
      this.scene?.setRoomsAfterEdit(this.rooms);
    });
  }

  updateBuildingInfo() {
    this.roomService.getBuildings().subscribe((data) => {
      this.buildings = data;
    });
  }

  sendRoomId(room: IRoom) {
    this.clicked = room;
    this.floor = -1;
    this.getRooms(room.floor.building.id, this.floor);
  }

  searchRooms(
    roomNumberSearch: string,
    roomPurposeSearch: string,
    workingHoursStart: string,
    workingHoursEnd: string,
    quantity: string
  ) {
    this.showSearchedRooms = true;
    this.showBuildingDetails = false;
    this.showFloorDetails = false;
    this.showRoomDetails = false;
    let datumStart;
    let datumEnd;

    if (workingHoursStart.length <= 0 || workingHoursEnd.length <= 0) {
      datumStart = new Date();
      datumEnd = new Date();
    } else if (
      workingHoursStart.includes(':') &&
      workingHoursEnd.includes(':') &&
      workingHoursStart.length <= 5 &&
      workingHoursEnd.length <= 5
    ) {
      let splited = workingHoursStart.split(':', 10);
      let hourStart = parseInt(splited[0]);
      let minuteStart = parseInt(splited[1]);
      const start1 = new Date(2022, 10, 10, hourStart, minuteStart);
      datumStart = new Date(
        start1.getTime() - start1.getTimezoneOffset() * 60000
      );

      let splitedEnd = workingHoursEnd.split(':', 10);
      let hourEnd = parseInt(splitedEnd[0]);
      let minuteEnd = parseInt(splitedEnd[1]);
      const end1 = new Date(2022, 10, 10, hourEnd, minuteEnd);
      datumEnd = new Date(end1.getTime() - end1.getTimezoneOffset() * 60000);
    } else {
      this.showError();
      return;
    }

    const searchCriteria: ISearchCriteriaDto = {
      buildingId: this.building,
      floorNumber: this.floor,
      roomNumber: roomNumberSearch,
      roomPurpose: roomPurposeSearch,
      workingHoursStart: datumStart,
      workingHoursEnd: datumEnd,
      equipmentType: Number(this.selectedEquipment),
      quantity: Number(quantity),
    };

    this.roomService.searchRooms(searchCriteria).subscribe((data) => {
      this.searchedRooms = data;
      console.log('view:', this.searchedRooms);
    });
  }

  showError() {
    this.toastr.error('Bad request, please enter valid data.', 'Warning');
  }
  selectEquipment(evt: any): void {
    this.selectedEquipment = evt.value;
  }

  relocate(element: IEquipment) {
    this.doRelocate = true;
    this.element = element;
  }

  refreshEquipment(event: any) {
    this.equipments.forEach((element) => {
      if (element.id == event.equipmentId)
        element.reservedQuantity += event.reservedQuantity;
    });
  }

  closeStepper() {
    this.doRelocate = false;
  }

  renovate(){
    this.doRenovate = true
  }
}
