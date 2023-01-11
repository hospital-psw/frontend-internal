import { Component, Inject } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-sheet-schedule',
  templateUrl: './bottom-sheet-schedule.component.html',
  styleUrls: ['./bottom-sheet-schedule.component.scss'],
})
export class BottomSheetScheduleComponent {
  constructor(
    private router: Router,
    private bottomSheetRef: MatBottomSheetRef<BottomSheetScheduleComponent>
  ) {}

  scheduleAppointment(): void {
    this.router.navigate(['app/appointments/scheduling']);
    this.bottomSheetRef.dismiss();
  }

  scheduleVacation(): void {
    this.router.navigate(['app/vacation-requests/doctor/create']);
    this.bottomSheetRef.dismiss();
  }

  scheduleConsilium(): void {
    this.router.navigate(['app/schedule-consilium']);
    this.bottomSheetRef.dismiss();
  }
}
