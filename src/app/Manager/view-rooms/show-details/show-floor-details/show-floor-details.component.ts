import { IFloor } from './../../../Model/Floor';
import { Component, OnInit, Input } from '@angular/core';
import { RoomService } from '../../../service/room-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-show-floor-details',
  templateUrl: './show-floor-details.component.html',
  styleUrls: ['./show-floor-details.component.scss']
})
export class ShowFloorDetailsComponent implements OnInit {

  constructor(private roomService: RoomService, private toastr: ToastrService) { }

  @Input() room: any;
  isDisabled: boolean = true;
  
  ngOnInit(): void {
  }

  enableFields(){
    this.isDisabled = false;
  }

  editFloor(newPurpose: string, e: Event){
  
    e.preventDefault();
    const updatedFloor: IFloor = {id: this.room.floor.id,
                                number: this.room.floor.number,
                                purpose: newPurpose,
                                building: this.room.floor.building
                                }
    this.roomService.editFloor(updatedFloor).subscribe(
      {next:(res) =>{
        this.showSuccess();
      },
      error:(e) => {this.showError()}
    }
    );
  }

  showError() {
    this.toastr.error('Bad request, please enter valid data.', 'Warning');
  }

  showSuccess() {
    this.toastr.success('Successfully eddited floor.', 'Success');
  }
}
