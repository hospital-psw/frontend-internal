import { IConsiliumDisplay } from 'src/app/Manager/Model/ConsiliumDisplay';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-consiliums',
  templateUrl: './consiliums.component.html',
  styleUrls: ['./consiliums.component.scss'],
})
export class ConsiliumsComponent {
  displayedColumns: string[] = ['date', 'duration', 'topic'];
  @Input() consiliums: IConsiliumDisplay[];
}
