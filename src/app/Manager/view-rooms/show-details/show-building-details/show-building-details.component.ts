import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-building-details',
  templateUrl: './show-building-details.component.html',
  styleUrls: ['./show-building-details.component.scss']
})
export class ShowBuildingDetailsComponent implements OnInit {

  constructor() { }

  @Input() room: any;
  isDisabled: boolean = true;

  ngOnInit(): void {
    console.log('ispisuje')
    console.log(this.room.floor.building)
  }

}
