import { Component } from '@angular/core';

@Component({
  selector: 'app-specializations-list',
  templateUrl: './specializations-list.component.html',
  styleUrls: ['./specializations-list.component.scss']
})
export class SpecializationsListComponent {
  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];
}
