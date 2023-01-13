import { Component } from '@angular/core';
import { ITender } from '../model/tender.model';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { TenderService } from '../services/tender.service';
import { Router } from '@angular/router';
import { BloodType } from '../../blood-bank/model/blood-type.model';
import { MatDialog } from '@angular/material/dialog';
import { TenderReportComponent } from '../tender-report/tender-report.component';

@Component({
  selector: 'app-show-tenders',
  templateUrl: './show-tenders.component.html',
  styleUrls: ['./show-tenders.component.scss'],
})
export class ShowTendersComponent {
  showOffers: boolean[] = [];
  tenders: ITender[];
  panelOpenState = false;
  bloodTypes = Object.values(BloodType).splice(0, 8);
  constructor(
    private tenderService: TenderService,
    private router: Router,
    private toastr: ToastrService,
    private dialogRef: MatDialog
  ) {}

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
    this.router.navigateByUrl('/app/create-tender');
  }

  accept(tenderId: Number, i: Number) {
    this.tenderService.finishedTender(tenderId, i).subscribe((res) => {
      this.tenders = res;
      this.toastr.success('Tender successful finished.');
    });
  }

  calculateTenderOffers(offer: any) {
    let sum = 0;
    for (var item of offer.items) {
      sum += item.money.amount;
    }
    return sum;
  }

  openDialog() {
    this.dialogRef.open(TenderReportComponent);
  }
}
