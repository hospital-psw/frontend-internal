import { Component } from '@angular/core';
import { ITender } from '../model/tender.model';
import { TenderService } from '../services/tender.service';

@Component({
  selector: 'app-closed-tenders',
  templateUrl: './closed-tenders.component.html',
  styleUrls: ['./closed-tenders.component.scss'],
})
export class ClosedTendersComponent {
  tenders: ITender[];
  showWinners: boolean[] = [];
  isLoading = false;

  constructor(private tenderService: TenderService) {}

  ngOnInit(): void {
    this.tenderService.getClosed().subscribe((res) => {
      this.tenders = res;
      for (let i in this.tenders) {
        this.showWinners.push(false);
      }
      this.isLoading = true;
    });
  }

  calculateTenderOffers(items: any) {
    let sum = 0;
    for (var item of items) {
      sum += item.money.amount;
    }
    return sum;
  }
}
