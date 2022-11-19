import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IEquipment } from 'src/app/Manager/Model/Equipment';
import { IRoom } from 'src/app/Manager/Model/Room';
import { IRoomMap } from 'src/app/Manager/Model/RoomMap';
import { RoomService } from 'src/app/Manager/service/room-service.service';
import { RelocationService } from '../services/relocation.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  quantityForm = new FormGroup({
    quantity: new FormControl()
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

  startTimeForm = new FormGroup({
    startTime : new FormControl([])
  })

  dateTimes : Date[] = []
  showSpinner : boolean = false

  @Input() equipment: IEquipment;
  @Output() close = new EventEmitter()

  destinationRooms: IRoomMap[] = []
  constructor(private roomService: RoomService, private relocationService: RelocationService, private toastr: ToastrService) { }

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
    this.dateTimes = []
    this.showSpinner = true;
    const startTime1 = new Date(this.periodForm.controls['startDate'].value)
    const endTime1 = new Date(this.periodForm.controls['endDate'].value);
    this.relocationService.recommendDateTimes({fromRoom : this.equipment.room.id, toRoom : this.destinationRoomForm.controls.room.value, fromTime : startTime1 , toTime : endTime1, duration : this.durationForm.controls.duration.value}).subscribe((data) => {
      this.showSpinner = false;
      this.dateTimes = data;
      console.log(data);
    });
  
  }

  closeStepper(){
    this.relocationService.createRelocationRequest({fromRoomId : this.equipment.room.id, toRoomId : this.destinationRoomForm.controls.room.value, equipmentId : this.equipment.id, startTime : this.startTimeForm.controls.startTime.value?.at(0), duration : this.durationForm.controls.duration.value, quantity : this.quantityForm.controls.quantity.value}).subscribe({
      next: (res) => {
        this.showSuccess();
      },
      error: (e) => {
        this.showError();
      },
    })
    this.close.emit()
  }


  showError() {
  this.toastr.error('Bad request, please enter valid data.', 'Warning');
  }

  showSuccess() {
  this.toastr.success('Successfully scheduled relocation.', 'Success');
  }


}
