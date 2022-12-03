import { RenovationTypeEnum } from './../../../../Model/Enum/RenovationType';
import { IRenovationRequestDisplay } from './../../../../Model/RenovationRequestDisplay';
import { Component, Input } from '@angular/core';
import { RenovationService } from 'src/app/schedule-relocation/services/renovation.service';

@Component({
  selector: 'app-renovations',
  templateUrl: './renovations.component.html',
  styleUrls: ['./renovations.component.scss'],
})
export class RenovationsComponent {
  displayedColumns: string[] = ['renovationType', 'startTime', 'duration', 'button'];
  @Input() renovations: IRenovationRequestDisplay[];

  constructor(private renovationRequestService: RenovationService){}

  ngOnInit(): void {
    //this.renovationRequestService.getRenovations(this.room.id).subscribe((data) => { this.relocationRequests = data;})
  }
  convertEnum(type: number): string {
    return RenovationTypeEnum[type];
  }

  check24h(date: any):boolean{
    const now = new Date().valueOf()
    const relocation = new Date(date).valueOf()
    var hours = relocation - now
    if(hours > 86400000){
      return true;
    }
    return false;
  }

  decline(requestId: number){
    this.renovationRequestService.decline(requestId).subscribe((res) => {
      this.ngOnInit();
    });
    
  }
}
