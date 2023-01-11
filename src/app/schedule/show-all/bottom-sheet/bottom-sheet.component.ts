import { Component, OnInit, Inject } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ScheduleService } from '../../service/schedule.service';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
})
export class BottomSheetComponent implements OnInit {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: { appointmentId: number },
    private router: Router,
    private appointmentService: ScheduleService,
    private toaster: ToastrService,
    private bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>
  ) {}

  startExamination(event: any): void {
    this.router.navigate(['/app/examination/', this.data.appointmentId]);
    this.bottomSheetRef.dismiss();
  }

  rescheduleAppointment(event: any): void {
    this.router.navigate([
      '/app/reschedule-appointment',
      this.data.appointmentId,
    ]);
    this.bottomSheetRef.dismiss();
  }

  cancelAppointment(event: any): void {
    console.log('...');
    this.appointmentService
      .deleteAppointment(this.data.appointmentId as number)
      .subscribe((data) => {
        this.toaster.success('Successfuly canceled appointment');
      });
    this.bottomSheetRef.dismiss();
  }

  ngOnInit(): void {}
}
