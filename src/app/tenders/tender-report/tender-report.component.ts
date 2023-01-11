import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TenderService } from '../services/tender.service';

@Component({
  selector: 'app-tender-report',
  templateUrl: './tender-report.component.html',
  styleUrls: ['./tender-report.component.scss'],
})
export class TenderReportComponent {
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  constructor(private service: TenderService, private toast: ToastrService) {}

  generateReport() {
    this.service
      .generateReport(
        this.range.controls.start.value,
        this.range.controls.end.value
      )
      .subscribe((res) => this.toast.success('Report generated.'));
  }
}
