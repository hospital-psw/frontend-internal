import { Component } from '@angular/core';
import { ITender } from '../model/tender.model';
import { TenderService } from '../services/tender.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-tenders',
  templateUrl: './show-tenders.component.html',
  styleUrls: ['./show-tenders.component.scss'],
})
export class ShowTendersComponent {
  showOffers: boolean[] = [];
  tenders: ITender[];
  constructor(private tenderService: TenderService, private router: Router) {}

  ngOnInit(): void {
    this.tenderService.getAll().subscribe((res) => {
      this.tenders = res;
      for (let i in this.tenders) {
        this.showOffers.push(false);
      }
    });
  }

  showOffersEvent(i: number) {
    if (!this.showOffers.at(i)) this.showOffers[i] = true;
    else this.showOffers[i] = false;
  }

  getStatus(status: Number) {
    if (status === 0) return 'OPEN';
    else return '';
  }

  createTenderPage() {
    this.router.navigateByUrl('/create-tender');
  }
}
