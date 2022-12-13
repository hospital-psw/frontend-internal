import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Consilium } from './../../../interface/Consilium';
import { ScheduleService } from 'src/app/schedule/service/schedule.service';
import { ScheduleConsilium } from './../../../interface/ScheduleConsilium';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button-space',
  templateUrl: './button-space.component.html',
  styleUrls: ['./button-space.component.scss'],
})
export class ButtonSpaceComponent {
  @Input() scheduleConsiliumDto: ScheduleConsilium;
  @Input() selectedDoctors: number[];
  @Input() selectedSpecializations: number[];

  constructor(
    private scheduleService: ScheduleService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  scheduleConsilium(): void {
    this.configureDateRange();
    this.scheduleConsiliumDto.selectedDoctors = this.selectedDoctors;
    this.scheduleConsiliumDto.selectedSpecializations =
      this.selectedSpecializations;
    if (
      this.scheduleConsiliumDto.selectedDoctors != null &&
      this.scheduleConsiliumDto.selectedSpecializations != null
    ) {
      if (this.scheduleConsiliumDto.selectedDoctors.length == 0) {
        this.scheduleConsiliumDto.selectedDoctors = null as any;
      } else if (
        this.scheduleConsiliumDto.selectedSpecializations.length == 0
      ) {
        this.scheduleConsiliumDto.selectedSpecializations = null as any;
      }
    }
    this.scheduleService.scheduleConsilium(this.scheduleConsiliumDto).subscribe(
      (response: Consilium) => {
        this.router.navigate(['/app/consiliums']);
        this.toastrService.success(
          'Consilium is successfully scheduled. Date: ' +
          response.dateTime.toString()
        );
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        this.toastrService.error(error.error);
      }
    );
  }

  configureDateRange(): void {
    this.scheduleConsiliumDto.dateRange.from.setHours(
      this.scheduleConsiliumDto.dateRange.from.getHours() + 1
    );
    this.scheduleConsiliumDto.dateRange.to.setHours(
      this.scheduleConsiliumDto.dateRange.to.getHours() + 1
    );
  }
}
