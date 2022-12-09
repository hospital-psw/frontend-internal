import { Component, Input } from '@angular/core';
import { IAppointmentDisplay } from 'src/app/Manager/Model/AppointmentDisplay';
import { ExaminationTypeEnum } from 'src/app/Manager/Model/Enum/ExaminationType';
import { ExaminationType } from 'src/app/schedule/enum/ExaminationType.enum';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent {
  displayedColumns: string[] = ['date', 'duration', 'examinationType'];
  @Input() appointments: IAppointmentDisplay[];

  convertEnum(type: number): string {
    return ExaminationTypeEnum[type];
  }
}
