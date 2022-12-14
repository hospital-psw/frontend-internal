import { ScheduleConsilium } from './../../../interface/ScheduleConsilium';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AuthService } from 'src/app/common/auth/service/auth.service';

@Component({
  selector: 'app-schedule-consilium',
  templateUrl: './schedule-consilium.component.html',
  styleUrls: ['./schedule-consilium.component.scss'],
})
export class ScheduleConsiliumComponent implements OnInit {
  scheduleConsiliumDto: ScheduleConsilium;
  selectedSpecializations: number[];
  selectedDoctors: number[];
  doctorId: number;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.doctorId = user.id;
    });
    this.scheduleConsiliumDto = {
      doctorId: this.doctorId,
      selectedDoctors: null as any,
      selectedSpecializations: null as any,
      roomId: null as any,
      dateRange: null as any,
      duration: 30,
      topic: '',
    };
  }

  storeFromChildInfo(scheduleConsiliumDto: ScheduleConsilium): void {
    this.scheduleConsiliumDto = scheduleConsiliumDto;
  }
  storeFromChildDoctorsList(selectedDoctors: number[]): void {
    this.selectedDoctors = selectedDoctors;
  }
  storeFromChildSpecializations(selectedSpecializations: number[]): void {
    this.selectedSpecializations = selectedSpecializations;
  }
}
