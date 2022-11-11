import { Component, OnInit } from '@angular/core';
import { IRoom } from 'src/app/Manager/Model/Room';
import { Output, EventEmitter } from '@angular/core';

const ELEMENT_DATA: IRoom[] = [
  {id: 14, number: '101', floor: {id: 2, number: 1, purpose: 'hirurgija', building:{id: 4, name: 'Hospital1', address: 'Janka cmelika 27 Novi Sad'}}, purpose: 'operaciona sala', workingHours: {id: 1, start: new Date(), end: new Date()}},
  {id: 2, number: '101', floor: {id: 1, number: 1, purpose: 'hirurgija', building:{id: 4, name: 'Hospital1', address: 'Janka cmelika 27 Novi Sad'}}, purpose: 'operaciona sala', workingHours: {id: 1, start: new Date(), end: new Date()}},
  {id: 3, number: '101', floor: {id: 1, number: 1, purpose: 'hirurgija', building:{id: 4, name: 'Hospital1', address: 'Janka cmelika 27 Novi Sad'}}, purpose: 'operaciona sala', workingHours: {id: 1, start: new Date(), end: new Date()}},
  
];

@Component({
  selector: 'app-show-searched-rooms',
  templateUrl: './show-searched-rooms.component.html',
  styleUrls: ['./show-searched-rooms.component.scss']
})
export class ShowSearchedRoomsComponent implements OnInit {

  public dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['number', 'purpose'];
  clickedRows = new Set<IRoom>();

  constructor() { }

  @Output() newItemEvent = new EventEmitter<IRoom>();

  sendRoomId(value: IRoom) {
    this.newItemEvent.emit(value);
  }



  ngOnInit(): void {
  }

}
