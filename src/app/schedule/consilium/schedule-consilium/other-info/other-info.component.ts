import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { DateRange } from './../../../interface/DateRange';
import { RoomService } from 'src/app/Manager/service/room-service.service';
import { IRoom } from 'src/app/Manager/Model/Room';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-other-info',
  templateUrl: './other-info.component.html',
  styleUrls: ['./other-info.component.scss'],
})
export class OtherInfoComponent implements OnInit {
  //ISKORISTI
  @Input() doctorWorkingHourId: number;
  meetingRooms: IRoom[];
  @Output() selectedRoomId: number;
  @Output() selectedDateRange: DateRange;
  @Output() topic: string;

  constructor(
    private roomService: RoomService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getMeetingRooms();
    this.selectedDateRange = {
      from: Date.now as any,
      to: Date.now as any,
    };
  }

  getMeetingRooms(): void {
    //ZAKUCAN WORKING HOUR
    this.roomService.getRoomsWithWorkingHour(8).subscribe(
      (response: IRoom[]) => {
        this.meetingRooms = response;
      },
      (error: HttpErrorResponse) => {
        this.toastrService.error(error.message);
      }
    );
  }

  showData(): void {
    console.log(this.selectedRoomId, this.selectedDateRange, this.topic);
  }
}
