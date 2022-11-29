import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IRoomMap } from 'src/app/Manager/Model/RoomMap';
import { RoomService } from 'src/app/Manager/service/room-service.service';

@Component({
  selector: 'app-renovation-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit{

  renovationTypeForm = new FormGroup({
    type: new FormControl(),
  });

  roomForm = new FormGroup({
    room1: new FormControl(null),
    room2: new FormControl(null)
  })

  rooms1: IRoomMap[] = []
  rooms2: IRoomMap[] = []
  firstSelectedRoom: IRoomMap
  @Input() floor: number
  @Input() building: number

  @Output() close = new EventEmitter()

  constructor(private roomService: RoomService) {}


  ngOnInit(): void {
    this.roomService.getRooms(this.building, this.floor.toString()).subscribe(data => {
      this.rooms1 = data
      this.rooms1 = this.rooms1.filter(room => room.room.purpose !== 'hodnik')
    })
  }

  findRoomById(id: number){
    return this.rooms1.filter(room => room.room.id == id)[0]
  }

  filterPossibleRooms(){
    return this.rooms1.filter(room => room.room.id != this.firstSelectedRoom.room.id)
  }

  findPossibleRoomsForRenovation(event: any){
    this.rooms2 = []
    this.firstSelectedRoom = this.findRoomById(event.value)
    console.log(this.firstSelectedRoom)
    this.filterPossibleRooms().forEach(room => {
      //console.log(room)
      if(this.firstSelectedRoom.width == 1){
        if((this.firstSelectedRoom.x + this.firstSelectedRoom.width == room.x || this.firstSelectedRoom.x == room.x + room.width || this.firstSelectedRoom.x + this.firstSelectedRoom.width + 0.5 == room.x || this.firstSelectedRoom.x == room.x + room.width - 0.5) && this.firstSelectedRoom.z == room.z) {
          this.rooms2.push(room)
        }
      }
      else if(this.firstSelectedRoom.width == 2){
        if((this.firstSelectedRoom.x + this.firstSelectedRoom.width - 0.5 == room.x || this.firstSelectedRoom.x == room.x + room.width + 0.5) && this.firstSelectedRoom.z == room.z){
          this.rooms2.push(room)
        }
      }

    });
  }

  closeStepper(){
    this.close.emit()
  }
}
