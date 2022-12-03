import { RenovationTypeEnum } from './../../../../Model/Enum/RenovationType';
import { IRenovationRequestDisplay } from './../../../../Model/RenovationRequestDisplay';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-renovations',
  templateUrl: './renovations.component.html',
  styleUrls: ['./renovations.component.scss'],
})
export class RenovationsComponent {
  displayedColumns: string[] = ['renovationType', 'startTime', 'duration'];
  @Input() renovations: IRenovationRequestDisplay[];

  convertEnum(type: number): string {
    return RenovationTypeEnum[type];
  }
}
