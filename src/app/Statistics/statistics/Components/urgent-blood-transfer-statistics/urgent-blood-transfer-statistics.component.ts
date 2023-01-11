import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UrgentBloodTransferService } from '../../Services/urgent-blood-transfer.service';

@Component({
  selector: 'app-urgent-blood-transfer-statistics',
  templateUrl: './urgent-blood-transfer-statistics.component.html',
  styleUrls: ['./urgent-blood-transfer-statistics.component.scss'],
})
export class UrgentBloodTransferStatisticsComponent implements OnInit {
  html: string;
  display: any;
  http: any;
  ngOnInit(): void {}

  constructor(
    private service: UrgentBloodTransferService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}
  range = this.fb.group({
    start: [null, [Validators.required]],
    end: [null, [Validators.required]],
  });
  email = new FormControl<boolean>(false);

  generateReport() {
    if (this.range.valid) {
      this.service
        .sendReport(
          this.range.value.start!,
          this.range.value.end!,
          this.email.value!
        )
        .subscribe((blob: Blob): void => {
          if (this.email.value) {
            this.toastr.success(
              'Report generated, please check your email inbox!'
            );
          } else {
            this.toastr.success(
              'Report generated, you can find it on shared location hosted on the organizations SFTP server!'
            );
          }
          const file = new Blob([blob], { type: 'application/pdf' });
          const fileURL = URL.createObjectURL(file);
          window.open(fileURL, '_blank', 'width=1000, height=800');
        });
    }
  }
}
