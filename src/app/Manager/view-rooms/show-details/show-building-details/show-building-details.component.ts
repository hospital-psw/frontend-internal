import { IBuilding } from './../../../Model/Building';
import { Component, OnInit, Input } from '@angular/core';
import { RoomService } from '../../../service/room-service.service';

@Component({
  selector: 'app-show-building-details',
  templateUrl: './show-building-details.component.html',
  styleUrls: ['./show-building-details.component.scss']
})
export class ShowBuildingDetailsComponent implements OnInit {

  constructor(private roomService: RoomService) { }

  @Input() room: any;
  isDisabled: boolean = true;

  ngOnInit(): void {
    console.log('ispisuje')
    console.log(this.room.floor.building)
  }

  enableFields(){
    this.isDisabled = false;
  }

  editBuilding(newName: string){
    
    const updatedBuilding: IBuilding = {id: this.room.floor.building.id,
                                        name: newName,
                                        address:this.room.floor.address
                                }
    this.roomService.editBuilding(updatedBuilding).subscribe();
  }

}
