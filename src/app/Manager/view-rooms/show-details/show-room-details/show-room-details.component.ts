import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IRoom } from 'src/app/Manager/Model/Room';
import { IWorkingHours } from 'src/app/Manager/Model/WorkingHours';
import { RoomService } from '../../../service/room-service.service';
import { ToastrService } from 'ngx-toastr';
import { IEquipment } from 'src/app/Manager/Model/Equipment';

@Component({
  selector: 'app-show-room-details',
  templateUrl: './show-room-details.component.html',
  styleUrls: ['./show-room-details.component.scss'],
})
export class ShowRoomDetailsComponent implements OnInit {
  constructor(private roomService: RoomService, private toastr: ToastrService) {
    setInterval(() => {
      this.checkWorkingHours();
    }, 100);
  }

  @Input() room: any;
  @Input() equipment: IEquipment[];
  @Output() notify = new EventEmitter<any>();
  showWorkingHours: boolean = false;
  isDisabled: boolean = true;

  ngOnInit(): void {
  }

  checkWorkingHours(): void {
    if (this.room.workingHours == null) {
      this.showWorkingHours = false;
    }
    if (this.room?.workingHours.start != this.room.workingHours.end) {
      this.showWorkingHours = true;
    } else {
      this.showWorkingHours = false;
    }
  }

  enableFields() {
    this.isDisabled = false;
  }

  editRoom(
    newPurpose: string,
    newStart: string,
    newEnd: string,
    newNumber: string,
    e: Event
  ) {
    e.preventDefault();

    if (
      newStart.includes(':') &&
      newEnd.includes(':') &&
      newStart.length <= 5 &&
      newEnd.length <= 5
    ) {
      let splited = newStart.split(':', 10);
      let hourStart = parseInt(splited[0]);
      let minuteStart = parseInt(splited[1]);
      const start1 = new Date(2022, 10, 10, hourStart, minuteStart);
      //let converted = new Date(start1.getUTCFullYear(), start1.getUTCMonth(), start1.getUTCDate(), start1.getUTCHours(), start1.getUTCMinutes(), start1.getUTCSeconds())
      console.log('novo start:' + start1);
      //let convertedStart = moment.utc(start1).local().format('YYYY-MM-DDTHH:mm:SS:ss');
      let datum = new Date(
        start1.getTime() - start1.getTimezoneOffset() * 60000
      );

      let splitedEnd = newEnd.split(':', 10);
      let hourEnd = parseInt(splitedEnd[0]);
      let minuteEnd = parseInt(splitedEnd[1]);
      const end1 = new Date(2022, 10, 10, hourEnd, minuteEnd);
      let datum2 = new Date(end1.getTime() - end1.getTimezoneOffset() * 60000);
      let num = parseInt(newNumber);

      const updatedWorkingHours: IWorkingHours = {
        id: this.room.workingHours.id,
        start: datum,
        end: datum2,
      };
      const updatedRoom: IRoom = {
        id: this.room.id,
        number: newNumber,
        floor: this.room.floor,
        purpose: newPurpose,
        workingHours: updatedWorkingHours,
      };
      this.roomService.editRoom(updatedRoom).subscribe({
        next: (res) => {
          this.notify.emit();
          this.showSuccess();
        },
        error: (e) => {
          this.showError();
        },
      });
    } else {
      this.showError();
    }
  }

  showError() {
    this.toastr.error('Bad request, please enter valid data.', 'Warning');
  }

  showSuccess() {
    this.toastr.success('Successfully eddited room.', 'Success');
  }
}
