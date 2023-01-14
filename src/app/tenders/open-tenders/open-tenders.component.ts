import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ITender } from '../model/tender.model';
import { TenderService } from '../services/tender.service';
import { TenderOfferComponent } from '../tender-offer/tender-offer.component';

@Component({
  selector: 'app-open-tenders',
  templateUrl: './open-tenders.component.html',
  styleUrls: ['./open-tenders.component.scss'],
})
export class OpenTendersComponent {
  panelOpenState = false;
  showOffers: boolean[] = [];
  tenders: ITender[];

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

  openDialog(i:number) {
    this.dialogRef.open(TenderOfferComponent,{
      data:this.tenders[i]
    });
  }
}
