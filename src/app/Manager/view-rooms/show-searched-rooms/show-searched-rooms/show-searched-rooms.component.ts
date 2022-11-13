import { Component, Input, OnInit } from '@angular/core';
import { IRoom } from 'src/app/Manager/Model/Room';
import { Output, EventEmitter } from '@angular/core';

const ELEMENT_DATA: IRoom[] = [
  {
    id: 14,
    number: '101',
    floor: {
      id: 2,
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
  },
  {
    id: 2,
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
  },
  {
    id: 3,
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
  },
];

@Component({
  selector: 'app-show-searched-rooms',
  templateUrl: './show-searched-rooms.component.html',
  styleUrls: ['./show-searched-rooms.component.scss'],
})
export class ShowSearchedRoomsComponent implements OnInit {
  constructor() {}

  @Input() searchedRooms: IRoom[];
  @Output() newItemEvent = new EventEmitter<IRoom>();

  public dataSource :IRoom[] = [];
  displayedColumns: string[] = ['number', 'floor', 'building', 'purpose'];
  clickedRows = new Set<IRoom>(); //ne treba mi?

  sendRoomId(value: IRoom) {
    this.newItemEvent.emit(value);
  }

  ngOnInit(): void {
    this.dataSource = this.searchedRooms;
    console.log(this.dataSource);
  }

  ngOnChange(): void {
    this.dataSource = this.searchedRooms;
    console.log(this.dataSource);
  }
}
