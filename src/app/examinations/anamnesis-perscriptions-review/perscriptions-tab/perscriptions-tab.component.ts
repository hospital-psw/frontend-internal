import { PrescriptionService } from './../../services/prescription.service';
import { Perscription } from './../../interface/Perscription';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-perscriptions-tab',
  templateUrl: './perscriptions-tab.component.html',
  styleUrls: ['./perscriptions-tab.component.scss'],
})
export class PerscriptionsTabComponent {
  perscriptions: Perscription[] = [];
  selectedPerscription: Perscription;

  constructor(
    private perscriptionService: PrescriptionService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getPerscription();
    this.selectedPerscription = {
      id: null as any,
      medicament: null as any,
      description: '',
      dateRange: null as any,
    };
  }

  getPerscription(): void {
    this.perscriptionService.getPerscriptions().subscribe(
      (response: Perscription[]) => {
        this.perscriptions = response;
      },
      (error: HttpErrorResponse) => {
        this.toastrService.error(error.message);
      }
    );
  }

  onInputChange(event: any): void {
    if (event.target.value === undefined) {
      return;
    }
    if (event.target.value === '') {
      this.getPerscription();
      return;
    }
    this.selectedPerscription = {
      id: null as any,
      medicament: null as any,
      description: '',
      dateRange: null as any,
    };
    this.perscriptionService.searchPerscriptions(event.target.value).subscribe(
      (response: Perscription[]) => {
        this.perscriptions = response;
      },
      (error: HttpErrorResponse) => {
        this.toastrService.error(error.message);
      }
    );
  }

  onSelect(perscription: Perscription): void {
    this.selectedPerscription = perscription;
  }
}
