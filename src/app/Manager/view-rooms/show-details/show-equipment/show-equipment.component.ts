import { Component, OnInit } from '@angular/core';
import { IEquipment } from 'src/app/Manager/Model/Equipment';


@Component({
  selector: 'app-show-equipment',
  templateUrl: './show-equipment.component.html',
  styleUrls: ['./show-equipment.component.scss']
})
export class ShowEquipmentComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['typeOfEquipment', 'quantity', 'button'];
  public equipment: IEquipment[] = []
  ngOnInit(): void {
  }

}
