import { Component, OnInit, Input } from '@angular/core';
import { IRoom } from 'src/app/Manager/Model/Room';

@Component({
  selector: 'app-show-floor-details',
  templateUrl: './show-floor-details.component.html',
  styleUrls: ['./show-floor-details.component.scss']
})
export class ShowFloorDetailsComponent implements OnInit {

  constructor() { }

  @Input() room: any;
  isDisabled: boolean = true;

  ngOnInit(): void {
  }

}
