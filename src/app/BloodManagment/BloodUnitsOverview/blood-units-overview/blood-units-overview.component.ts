import { Component } from '@angular/core';
import { BloodType } from 'src/app/medical-treatment/enum/BloodType.enum';
import { BloodUnit } from 'src/app/medical-treatment/interface/BloodUnit';
import { BloodStorageService } from '../../service/blood-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blood-units-overview',
  templateUrl: './blood-units-overview.component.html',
  styleUrls: ['./blood-units-overview.component.scss'],
})
export class BloodUnitsOverviewComponent {
  constructor(
    private bloodStorageService: BloodStorageService,
    private router: Router
  ) {}

  dataSource: BloodUnit[];
  displayedColumns: string[] = ['bloodType', 'amount'];
  totalUnits: number;

  ngOnInit(): void {
    this.bloodStorageService
      .GetBloodUnits()
      .subscribe((response: BloodUnit[]) => {
        this.dataSource = response;
        this.totalUnits = this.getTotalUnits();
      });
  }

  getTitle(bloodUnit: any): string {
    switch (bloodUnit.bloodType) {
      case 0:
        return 'A POSITIVE';
      case 1:
        return 'A NEGATIVE';
      case 4:
        return 'AB POSITIVE';
      case 5:
        return 'AB NEGATIVE';
      case 2:
        return 'B POSITIVE';
      case 3:
        return 'B NEGATIVE';
      case 6:
        return 'O POSITIVE';
      default:
        return 'O NEGATIVE';
    }
  }

  getTotalUnits(): number {
    console.log(this.dataSource);
    var sum = 0;
    this.dataSource.forEach((el) => {
      sum += el.amount;
    });
    return sum;
  }

  previewAdditions(unit: any) {
    this.router.navigateByUrl('app/blood-additions/' + unit);
  }
}
