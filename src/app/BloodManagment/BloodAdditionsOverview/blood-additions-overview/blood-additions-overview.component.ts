import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BloodAddition } from '../../interface/BloodAddition';
import { BloodType } from '../../interface/BloodType.enum';
import { BloodAdditionService } from '../../service/blood-addition.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blood-additions-overview',
  templateUrl: './blood-additions-overview.component.html',
  styleUrls: ['./blood-additions-overview.component.scss']
})
export class BloodAdditionsOverviewComponent {

  constructor(private bloodAdditionService:BloodAdditionService,
              private route: ActivatedRoute
    ) {}

  bloodAdditions:BloodAddition[]
  displayedColumns: string[] = [
    'date',
    'bloodType',
    'amount',
  ];
  
  ngOnInit(): void {
    var bloodType = this.route.snapshot.paramMap.get('bt')!;
    this.bloodAdditionService
      .GetByBloodType(bloodType)
      .subscribe((response: BloodAddition[]) => {
        this.bloodAdditions = response;
      });
  }

  debug(){
    
    this.bloodAdditions.forEach((el) => {
      console.log("EOOOOO ME");
      console.log(el.amount);
    });

  }
}
