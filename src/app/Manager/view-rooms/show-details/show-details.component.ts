import { Component, Input, OnInit } from '@angular/core';
import { Room } from 'src/app/doctor/interface/Room';
import { IRoom } from '../../Model/Room';
import { GraphicRoom } from '../model/GraphicRoom';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss'],
})
export class ShowDetailsComponent implements OnInit {
  constructor() {
    setInterval(() => {
      this.checkWorkingHours();
    }, 100);
  }
  @Input() room: any;

  showWorkingHours: boolean = false;
  isDisabled: boolean = true;

  ngOnInit(): void {}

  checkWorkingHours(): void {
    if (this.room.workingHours.start != this.room.workingHours.end) {
      this.showWorkingHours = true;
    } else {
      this.showWorkingHours = false;
    }
  }
}
