import { Component, Input, OnInit } from '@angular/core';
import { Room } from 'src/app/doctor/interface/Room';
import { IRoom } from '../../Model/Room';
import { GraphicRoom } from '../model/GraphicRoom';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {

  constructor() { }
  @Input() room: any;

  showWorkingHours: boolean = false;

  ngOnInit(): void {
    if(this.room.workingHous.start != null && this.room.workingHous.end != null)
    {
      this.showWorkingHours = true;
    }
  }


  isDisabled() : boolean{
    return true;
  }

}
