import { ScheduleConsilium } from './../../../interface/ScheduleConsilium';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-schedule-consilium',
  templateUrl: './schedule-consilium.component.html',
  styleUrls: ['./schedule-consilium.component.scss'],
})
export class ScheduleConsiliumComponent implements OnInit {
  @Input() scheduleConsiliumDto: ScheduleConsilium;
  @Input() selectedSpecializations: number[];
  @Input() selectedDoctors: number[];

  ngOnInit(): void {
    this.scheduleConsiliumDto = {
      doctorId: null as any,
      selectedDoctors: null as any,
      selectedSpecializations: null as any,
      roomId: null as any,
      dateRange: null as any,
      duration: 30,
      topic: '',
    };
  }

  constructor() { }

  // ngOnChanges(changes: SimpleChanges): void {
  //   changes['scheduleConsiliumDto'].currentValue.selectedSpecialization =
  //     changes['selectedSpecialization'].currentValue;
  //   changes['scheduleConsiliumDto'].currentValue.selectedDoctors =
  //     changes['selectedDoctors'].currentValue;
  // }

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
