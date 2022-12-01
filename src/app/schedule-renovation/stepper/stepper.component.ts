import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IRoomMap } from 'src/app/Manager/Model/RoomMap';
import { RoomService } from 'src/app/Manager/service/room-service.service';
import { RenovationService } from 'src/app/schedule-relocation/services/renovation.service';

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
    room1: new FormControl(),
    room2: new FormControl()
  })

  periodForm = new FormGroup({
    startDate: new FormControl(),
    endDate: new FormControl()
  })

  durationForm = new FormGroup({
    duration: new FormControl()
  })

  startTimeForm = new FormGroup({
    startTime: new FormControl([]),
  });

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

  dateTimes: Date[] = [];
  showSpinner: boolean = false;

  constructor(private roomService: RoomService, private renovationService: RenovationService) {}


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

  recommend() {
    console.log(this.roomForm.controls.room1.value)
    this.dateTimes = [];
    this.showSpinner = true;
    const startTime1 = new Date(this.periodForm.controls['startDate'].value);
    const endTime1 = new Date(this.periodForm.controls['endDate'].value);
    this.renovationService
      .recommendDateTimes({
        roomsId: [this.roomForm.controls.room1.value, this.roomForm.controls.room2.value],
        fromTime: startTime1,
        toTime: endTime1,
        duration: this.durationForm.controls.duration.value,
      })
      .subscribe((data) => {
        this.showSpinner = false;
        this.dateTimes = data;
        console.log(data);
      });
  }
}
