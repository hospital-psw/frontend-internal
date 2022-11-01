import { IWorkingHours } from './../../Model/WorkingHours';
import { IRoom } from './../../Model/Room';
import { Component, Input, OnInit } from '@angular/core';
import { Room } from 'src/app/doctor/interface/Room';
import { GraphicRoom } from '../model/GraphicRoom';
import { RoomService } from '../../service/room-service.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss'],
})
export class ShowDetailsComponent implements OnInit {

  constructor(private roomService: RoomService) {
    setInterval(() => {
      this.checkWorkingHours();
    }, 100);
  }
  @Input() room: any;
  @Input() showBuildingDetails: boolean;
  @Input() showFloorDetails: boolean;
  @Input() showRoomDetails: boolean;

  reactiveForm: FormGroup;
  showWorkingHours: boolean = false;
  isDisabled: boolean = true;
  purpose: string = "";

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      buildingName: new FormControl(this.room.floor.building.name),
      buildingAdsress: new FormControl(this.room.floor.building.address),
      numberOfFloor: new FormControl(this.room.floor.number),
      purposeOfFloor: new FormControl(this.room.floor.purpose),
      numberOfRoom: new FormControl(this.room.number),
      purposeOfRoom: new FormControl(this.room.purpose),
      startWorkingHours: new FormControl(this.room.workingHours.start),
      endWorkingHours: new FormControl(this.room.workingHours.end)
    });
  }

  checkWorkingHours(): void {
    if(this.room.workingHours == null)
    {
      this.showWorkingHours = false;
    }
    if (this.room.workingHours.start != this.room.workingHours.end) {
      this.showWorkingHours = true;
    } else {
      this.showWorkingHours = false;
    }
  }

  enableFields(){
    this.isDisabled = false;
    console.log(this.isDisabled);
  }

  editRoom(newPurpose: string, newStart: string, newEnd: string, newNumber:string){
    
    let splited = newStart.split(":", 10);
    let hourStart = parseInt(splited[0]);
    let minuteStart = parseInt(splited[1])
    const start1 = new Date(2022, 10, 10, hourStart, minuteStart)
    //let converted = new Date(start1.getUTCFullYear(), start1.getUTCMonth(), start1.getUTCDate(), start1.getUTCHours(), start1.getUTCMinutes(), start1.getUTCSeconds())
    console.log("novo start:" + start1);
    //let convertedStart = moment.utc(start1).local().format('YYYY-MM-DDTHH:mm:SS:ss');
    let datum = new Date(start1.getTime() - (start1.getTimezoneOffset() * 60000))
  
    let splitedEnd = newEnd.split(":", 10);
    let hourEnd = parseInt(splitedEnd[0])
    let minuteEnd = parseInt(splitedEnd[1])
    const end1 = new Date(2022, 10, 10, hourEnd, minuteEnd)
    let datum2 = new Date(end1.getTime() - (end1.getTimezoneOffset() * 60000))
    let num = parseInt(newNumber)

    const updatedWorkingHours: IWorkingHours = {id: this.room.workingHours.id,
                                        start: datum,
                                        end: datum2}
    const updatedRoom: IRoom = {id: this.room.id,
                                number: newNumber,
                                floor: this.room.floor,
                                purpose: newPurpose,
                                workingHours: updatedWorkingHours
                                }
    this.roomService.editRoom(updatedRoom).subscribe();
  }

}
