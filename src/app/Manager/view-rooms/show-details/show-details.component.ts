import { Component, Input, OnInit } from '@angular/core';
import { Room } from 'src/app/doctor/interface/Room';
import { GraphicRoom } from '../model/GraphicRoom';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {

  constructor() { }
  @Input() clickedRoom: GraphicRoom;

  ngOnInit(): void {
  }

}
