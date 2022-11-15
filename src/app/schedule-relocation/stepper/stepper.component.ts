import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { isThisSecond } from 'date-fns';
import { IEquipment } from 'src/app/Manager/Model/Equipment';
import { IRoom } from 'src/app/Manager/Model/Room';
import { IRoomMap } from 'src/app/Manager/Model/RoomMap';
import { RoomService } from 'src/app/Manager/service/room-service.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  quantityForm = new FormGroup({
    quantity: new FormControl('')
  });

  destinationRoomForm = new FormGroup({
    room: new FormControl({})
  })

  periodForm = new FormGroup({
    startDate: new FormControl(),
    endDate: new FormControl()
  })

  durationForm = new FormGroup({
    duration: new FormControl()
  })

  @Input() equipment: IEquipment;
  destinationRooms: IRoomMap[] = []
  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    console.log(this.equipment.quantity)
    this.getPossibleDestinationRooms()
  }

  getPossibleDestinationRooms(){
    this.roomService.getBuilding(this.equipment.room.floor.building.id).subscribe(data => {
      this.destinationRooms = data
      this.filterDestinationRooms()
    })
  }

  filterDestinationRooms(){
    this.destinationRooms = this.destinationRooms.filter(destRoom => destRoom.room.purpose !== 'hodnik'
    && destRoom.room.id !== this.equipment.room.id);
    console.log(this.destinationRooms);
  }

}
