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

  periodForm = new FormGroup({
    startDate: new FormControl(null),
    endDate: new FormControl(null)
  })

  durationForm = new FormGroup({
    duration: new FormControl()
  })

  newInfoForm = new FormGroup({
    newName1: new FormControl(''),
    newName2: new FormControl(''),
    newPurpose1: new FormControl(''),
    newPurpose2: new FormControl('')
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

  decideRenovationType(){
    if(this.renovationTypeForm.value.type == 1)
      this.findPossibleRoomsForSplitRenovation()
  }

  findRoomById(id: number){
    return this.rooms1.filter(room => room.room.id == id)[0]
  }

  filterPossibleRooms(){
    return this.rooms1.filter(room => room.room.id != this.firstSelectedRoom.room.id)
  }

  findPossibleRoomsForMergeRenovation(event: any){
    this.rooms2 = []
    this.firstSelectedRoom = this.findRoomById(event.value)
    console.log(this.firstSelectedRoom)
    this.filterPossibleRooms().forEach(room => {
      if(this.firstSelectedRoom.width == 1){
        if(this.isNextdoorRoom(room)) {
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

  findPossibleRoomsForSplitRenovation(){
    this.rooms1 = this.rooms1.filter(room => room.width > 1)
  }

  isNextdoorRoom(room: IRoomMap){
    if((this.firstSelectedRoom.x + this.firstSelectedRoom.width == room.x || this.firstSelectedRoom.x == room.x + room.width
      || this.firstSelectedRoom.x + this.firstSelectedRoom.width + 0.5 == room.x || this.firstSelectedRoom.x == room.x + room.width - 0.5)
      && this.firstSelectedRoom.z == room.z)
      return true
    return false
  }

  closeStepper(){
    this.close.emit()
  }
}
