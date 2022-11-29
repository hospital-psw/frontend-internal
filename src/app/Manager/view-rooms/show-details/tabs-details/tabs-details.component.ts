import { Component } from '@angular/core';
import { OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IRelocationRequestDisplay } from 'src/app/Manager/Model/RelocationRequestDisplay';

@Component({
  selector: 'app-tabs-details',
  templateUrl: './tabs-details.component.html',
  styleUrls: ['./tabs-details.component.scss']
})
export class TabsDetailsComponent {
  constructor() {}
  @Input() relocationRequests: IRelocationRequestDisplay[];
}
