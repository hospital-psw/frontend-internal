import { MedicalTreatment } from './../../interface/MedicalTreatment';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-component-tabs',
  templateUrl: './component-tabs.component.html',
  styleUrls: ['./component-tabs.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ComponentTabsComponent implements OnInit {
  @Input() activeTreatments: MedicalTreatment[];
  @Input() inactiveTreatments: MedicalTreatment[];
  @Output() pageSizeFirst = new EventEmitter<number>();
  @Output() pageNumberFirst = new EventEmitter<number>();
  @Output() pageSizeSecond = new EventEmitter<number>();
  @Output() pageNumberSecond = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  storePageNumberSecond(pageNumber: number) {
    this.pageNumberSecond.emit(pageNumber);
  }
  storePageSizeSecond(pageSize: number) {
    this.pageSizeSecond.emit(pageSize);
  }
  storePageNumberFirst(pageNumber: number) {
    this.pageNumberFirst.emit(pageNumber);
  }
  storePageSizeFirst(pageSize: number) {
    this.pageSizeFirst.emit(pageSize);
  }
}
