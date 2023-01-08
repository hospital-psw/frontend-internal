import { Component } from '@angular/core';
import { BloodUnit } from 'src/app/medical-treatment/interface/BloodUnit';
import { BloodStorageService } from '../../service/blood-storage.service';

@Component({
  selector: 'app-blood-units-overview',
  templateUrl: './blood-units-overview.component.html',
  styleUrls: ['./blood-units-overview.component.scss']
})
export class BloodUnitsOverviewComponent {

  constructor(
    private bloodStorageService:BloodStorageService,
  ) {}

  dataSource: Object[];
  displayedColumns: string[] = [
    'bloodType',
    'amount',
  ];

  ngOnInit(): void {
    
    this.bloodStorageService
      .GetBloodUnits()
      .subscribe((response: BloodUnit[]) => {
        this.dataSource = response;
      });
}
}
