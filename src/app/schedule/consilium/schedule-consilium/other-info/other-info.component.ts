import { ScheduleConsilium } from './../../../interface/ScheduleConsilium';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { DateRange } from './../../../interface/DateRange';
import { RoomService } from 'src/app/Manager/service/room-service.service';
import { IRoom } from 'src/app/Manager/Model/Room';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ScheduleService } from 'src/app/schedule/service/schedule.service';

@Component({
  selector: 'app-other-info',
  templateUrl: './other-info.component.html',
  styleUrls: ['./other-info.component.scss'],
})
export class OtherInfoComponent implements OnInit {
  doctorWorkingHourId: number;
  @Input() doctorId: number;
  meetingRooms: IRoom[];
  selectedRoomId: number;
  selectedDateRange: DateRange;
  topic: string;
  scheduleConsiliumDto: ScheduleConsilium;
  @Output() outputData = new EventEmitter<ScheduleConsilium>();

  constructor(
    private roomService: RoomService,
    private toastrService: ToastrService,
    private scheduleService: ScheduleService
  ) {}

  ngOnInit(): void {
    this.getWorkingHoursForDoctor(this.doctorId);

    this.selectedDateRange = {
      from: Date.now as any,
      to: Date.now as any,
    };

    this.scheduleConsiliumDto = {
      dateRange: null as any,
      topic: null as any,
      duration: 30,
      roomId: null as any,
      selectedDoctors: null as any,
      selectedSpecializations: null as any,
      doctorId: this.doctorId,
    };
  }

  getWorkingHoursForDoctor(doctorId: number) {
    this.scheduleService.getDoctorsWorkHours(doctorId).subscribe((result) => {
      console.log(result);
      this.doctorWorkingHourId = result.id;
      this.getMeetingRooms();
    });
  }

  getMeetingRooms(): void {
    this.roomService
      .getRoomsWithWorkingHour(this.doctorWorkingHourId)
      .subscribe(
        (response: IRoom[]) => {
          this.meetingRooms = response;
        },
        (error: HttpErrorResponse) => {
          this.toastrService.error(error.message);
        }
      );
  }

  showData(): void {
    this.scheduleConsiliumDto = {
      dateRange: this.selectedDateRange,
      topic: this.topic,
      duration: 30,
      roomId: this.selectedRoomId,
      selectedDoctors: null as any,
      selectedSpecializations: null as any,
      doctorId: this.doctorId,
    };

    this.outputData.emit(this.scheduleConsiliumDto);
  }
}
