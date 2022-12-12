import { RenovationTypeEnum } from './../../../../Model/Enum/RenovationType';
import { IRenovationRequestDisplay } from './../../../../Model/RenovationRequestDisplay';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RenovationService } from 'src/app/schedule-relocation/services/renovation.service';
import { IRoom } from 'src/app/Manager/Model/Room';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-renovations',
  templateUrl: './renovations.component.html',
  styleUrls: ['./renovations.component.scss'],
})
export class RenovationsComponent {
  displayedColumns: string[] = [
    'renovationType',
    'startTime',
    'duration',
    'button',
  ];
  @Input() renovations: IRenovationRequestDisplay[];
  @Input() room: IRoom;
  @Output() notify = new EventEmitter<any>();

  constructor(
    private renovationRequestService: RenovationService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.renovationRequestService
      .getRenovations(this.room.id)
      .subscribe((data) => {
        this.renovations = data;
      });
  }
  convertEnum(type: number): string {
    return RenovationTypeEnum[type];
  }

  check24h(date: any): boolean {
    const now = new Date().valueOf();
    const relocation = new Date(date).valueOf();
    var hours = relocation - now;
    if (hours > 86400000) {
      return true;
    }
    return false;
  }

  decline(requestId: number) {
    this.renovationRequestService.decline(requestId).subscribe((res) => {
      this.ngOnInit();
      this.notify.emit();
      this.showSuccess();
    });
  }

  showSuccess() {
    this.toastr.success('Successfully eddited room.', 'Success');
  }
}
