import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-room-details',
  templateUrl: './show-room-details.component.html',
  styleUrls: ['./show-room-details.component.scss']
})
export class ShowRoomDetailsComponent implements OnInit {

  constructor() {
    setInterval(() => {
      this.checkWorkingHours();
    }, 100);
  }

  @Input() room: any;
  showWorkingHours: boolean = false;
  isDisabled: boolean = true;

  ngOnInit(): void {

  }

  checkWorkingHours(): void {
    if(this.room.workingHours == null)
    {
      this.showWorkingHours = false;
    }
    if (this.room.workingHours.start != this.room.workingHours.end) {
      this.showWorkingHours = true;
    } else {
      this.showWorkingHours = false;
    }
  }

}
