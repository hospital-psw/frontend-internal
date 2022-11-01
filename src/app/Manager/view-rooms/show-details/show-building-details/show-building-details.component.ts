import { Component, OnInit, Input } from '@angular/core';
import { IRoom } from 'src/app/Manager/Model/Room';

@Component({
  selector: 'app-show-building-details',
  templateUrl: './show-building-details.component.html',
  styleUrls: ['./show-building-details.component.scss'],
})
export class ShowBuildingDetailsComponent implements OnInit {
  constructor() {}

  @Input() room: any;
  isDisabled: boolean = true;

  ngOnInit(): void {}
}
