import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IRoomMap } from 'src/app/Manager/Model/RoomMap';
import { RoomService } from 'src/app/Manager/service/room-service.service';
import { IRenovationDetails } from 'src/app/schedule-relocation/model/RenovationDetails';
import { IRenovationRequest } from 'src/app/schedule-relocation/model/RenovationRequest';
import { RenovationService } from 'src/app/schedule-relocation/services/renovation.service';

@Component({
  selector: 'app-renovation-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  renovationTypeForm = new FormGroup({
    type: new FormControl(),
  });

  roomForm = new FormGroup({
    room1: new FormControl(),
    room2: new FormControl(),
  });

  periodForm = new FormGroup({
    startDate: new FormControl(),
    endDate: new FormControl(),
  });

  durationForm = new FormGroup({
    duration: new FormControl(),
  });

  startTimeForm = new FormGroup({
    startTime: new FormControl([]),
  });

  newInfoForm = new FormGroup({
    newName1: new FormControl(),
    newName2: new FormControl(),
    newPurpose1: new FormControl(),
    newPurpose2: new FormControl(),
    newCapacity1: new FormControl(),
    newCapacity2: new FormControl(),
  });

  rooms1: IRoomMap[] = [];
  rooms2: IRoomMap[] = [];
  firstSelectedRoom: IRoomMap;
  @Input() floor: number;
  @Input() building: number;

  @Output() closeNotify = new EventEmitter();

  dateTimes: Date[] = [];
  showSpinner: boolean = false;
  public selectRoom: number = 0;

  constructor(
    private roomService: RoomService,
    private renovationService: RenovationService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.roomService
      .getRooms(this.building, this.floor.toString())
      .subscribe((data) => {
        this.rooms1 = data;
        this.rooms1 = this.rooms1.filter(
          (room) => room.room.purpose !== 'hodnik'
        );
      });
  }

  decideRenovationType() {
    if (this.renovationTypeForm.value.type == 1)
      this.findPossibleRoomsForSplitRenovation();
  }

  findRoomById(id: number) {
    return this.rooms1.filter((room) => room.room.id == id)[0];
  }

  filterPossibleRooms() {
    return this.rooms1.filter(
      (room) => room.room.id != this.firstSelectedRoom.room.id
    );
  }

  findPossibleRoomsForMergeRenovation(event: any) {
    this.rooms2 = [];
    this.firstSelectedRoom = this.findRoomById(event.value);
    this.filterPossibleRooms().forEach((room) => {
      if (this.firstSelectedRoom.width == 1) {
        if (this.isNextdoorRoom(room)) {
          this.rooms2.push(room);
        }
      } else if (this.firstSelectedRoom.width == 2) {
        if (
          (this.firstSelectedRoom.x + this.firstSelectedRoom.width - 0.5 ==
            room.x ||
            this.firstSelectedRoom.x == room.x + room.width + 0.5) &&
          this.firstSelectedRoom.z == room.z
        ) {
          this.rooms2.push(room);
        }
      }
    });
  }

  findPossibleRoomsForSplitRenovation() {
    this.rooms1 = this.rooms1.filter((room) => room.width > 1);
  }

  isNextdoorRoom(room: IRoomMap) {
    if (
      (this.firstSelectedRoom.x + this.firstSelectedRoom.width == room.x ||
        this.firstSelectedRoom.x == room.x + room.width ||
        this.firstSelectedRoom.x + this.firstSelectedRoom.width + 0.5 ==
          room.x ||
        this.firstSelectedRoom.x == room.x + room.width - 0.5) &&
      this.firstSelectedRoom.z == room.z
    )
      return true;
    return false;
  }

  closeStepper() {
    this.closeNotify.emit();
  }

  recommend() {
    this.dateTimes = [];
    this.showSpinner = true;
    const startTime1 = new Date(this.periodForm.controls['startDate'].value);
    const endTime1 = new Date(this.periodForm.controls['endDate'].value);
    var roomsId: number[] = [];
    if (this.renovationTypeForm.controls.type.value == 0) {
      roomsId.push(this.roomForm.controls.room1.value);
      roomsId.push(this.roomForm.controls.room2.value);
    } else {
      roomsId.push(this.roomForm.controls.room1.value);
    }
    console.log(
      roomsId,
      startTime1,
      endTime1,
      this.durationForm.controls.duration.value
    );
    this.renovationService
      .recommendDateTimes({
        roomsId: roomsId,
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

  doesNewRoomNameExists(number: string): boolean {
    return this.rooms1.some((room) => room.room.number == number);
  }

  validateNewDetailsWhenSplit(): boolean {
    if (
      !this.newInfoForm.value.newName1.startsWith(this.floor.toString()) ||
      this.doesNewRoomNameExists(this.newInfoForm.value.newName1) ||
      !this.newInfoForm.value.newName2.startsWith(this.floor.toString()) ||
      this.doesNewRoomNameExists(this.newInfoForm.value.newName2) ||
      this.newInfoForm.value.newName1 == undefined ||
      this.newInfoForm.value.newName2 == undefined ||
      this.newInfoForm.value.newPurpose1 == undefined ||
      this.newInfoForm.value.newPurpose2 == undefined
    ) {
      this.toastr.error(
        'New room number invalid, please enter valid data.',
        'Warning'
      );
      return false;
    }
    return true;
  }

  validateNewDetailsWhenMerge(): boolean {
    if (
      !this.newInfoForm.value.newName1.startsWith(this.floor.toString()) ||
      this.doesNewRoomNameExists(this.newInfoForm.value.newName1) ||
      this.newInfoForm.value.newPurpose1 == undefined ||
      this.newInfoForm.value.newName1 == undefined
    ) {
      this.toastr.error(
        'New room number invalid, please enter valid data.',
        'Warning'
      );
      return false;
    }
    return true;
  }

  schedule() {
    var renovationDetails: IRenovationDetails[] = [];
    var roomsId: number[] = [];
    if (this.renovationTypeForm.controls.type.value == 0) {
      if (!this.validateNewDetailsWhenMerge()) return;
      roomsId.push(this.roomForm.controls.room1.value);
      roomsId.push(this.roomForm.controls.room2.value);
      var newCapacity = 0;
      if (this.newInfoForm.value.newPurpose1 == 'operaciona sala')
        newCapacity = this.newInfoForm.controls.newCapacity1.value;
      renovationDetails.push({
        newRoomName: this.newInfoForm.controls.newName1.value,
        newRoomPurpose: this.newInfoForm.controls.newPurpose1.value,
        newCapacity: newCapacity,
      });
    } else {
      if (!this.validateNewDetailsWhenSplit()) return;
      roomsId.push(this.roomForm.controls.room1.value);
      var newCapacity1 = 0;
      var newCapacity2 = 0;
      if (this.newInfoForm.value.newPurpose1 == 'operaciona sala')
        newCapacity1 = this.newInfoForm.controls.newCapacity1.value;
      if (this.newInfoForm.value.newPurpose2 == 'operaciona sala')
        newCapacity2 = this.newInfoForm.controls.newCapacity2.value;
      renovationDetails.push({
        newRoomName: this.newInfoForm.controls.newName1.value,
        newRoomPurpose: this.newInfoForm.controls.newPurpose1.value,
        newCapacity: newCapacity1,
      });
      renovationDetails.push({
        newRoomName: this.newInfoForm.controls.newName2.value,
        newRoomPurpose: this.newInfoForm.controls.newPurpose2.value,
        newCapacity: newCapacity2,
      });
    }
    this.renovationService
      .createRenovationRequest({
        renovationType: parseInt(this.renovationTypeForm.controls.type.value),
        roomsId: roomsId,
        startTime: this.startTimeForm.controls.startTime.value?.at(0),
        duration: this.durationForm.controls.duration.value,
        renovationDetails: renovationDetails,
      })
      .subscribe({
        next: (res) => {
          this.showSuccess();
        },
        error: (e) => {
          this.showError();
        },
      });
    this.closeStepper();
  }

  showError() {
    this.toastr.error('Bad request, please enter valid data.', 'Warning');
  }

  showSuccess() {
    this.toastr.success('Successfully scheduled relocation.', 'Success');
  }
}
