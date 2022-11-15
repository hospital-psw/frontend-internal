import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IEquipment } from 'src/app/Manager/Model/Equipment';
import { IRoom } from 'src/app/Manager/Model/Room';
import { IRoomMap } from 'src/app/Manager/Model/RoomMap';
import { RoomService } from 'src/app/Manager/service/room-service.service';
import { RelocationService } from '../services/relocation.service';
import { IRecommendedRelocationRequest } from '../model/RecommendedRelocationRequest';

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
    room: new FormControl()
  })

  periodForm = new FormGroup({
    startDate: new FormControl(),
    endDate: new FormControl()
  })

  durationForm = new FormGroup({
    duration: new FormControl()
  })

  dateTimes : Date[] = []

  @Input() equipment: IEquipment;
  destinationRooms: IRoomMap[] = []
  constructor(private roomService: RoomService, private relocationService: RelocationService) { }
  @Output() close = new EventEmitter()

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

  recommend(){
    const startTime = new Date(this.periodForm.controls['startDate'].value)
    const endTime = new Date(this.periodForm.controls['endDate'].value);
    this.relocationService.recommendDateTimes({fromRoom : this.equipment.room.id, toRoom : this.destinationRoomForm.controls.room.value, fromTime : startTime , toTime : endTime, duration : this.durationForm.controls.duration.value}).subscribe((data) => {
      console.log(data);
    });
  }

  closeStepper(){
    this.close.emit()
  }

}
