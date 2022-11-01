import { Component, OnInit, Input } from '@angular/core';

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
