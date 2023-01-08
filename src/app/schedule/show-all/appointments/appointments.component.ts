import { Route, Router } from '@angular/router';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  ChangeDetectorRef,
  ViewEncapsulation,
} from '@angular/core';
import { CalendarView, CalendarEvent } from 'angular-calendar';
import {
  addDays,
  addHours,
  startOfDay,
  addMinutes,
  setDate,
  setDay,
  subDays,
} from 'date-fns';
import { map, Subject, Observable, Subscription } from 'rxjs';
import { EventColor } from 'calendar-utils';
import { Appointment } from './../../interface/Appointment';
import { ScheduleService } from './../../service/schedule.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ExaminationType } from './../../enum/ExaminationType.enum';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/common/auth/service/auth.service';
import { WorkHours } from '../../interface/WorkHours';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';

const colors: Record<string, EventColor> = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#0E4C92',
    secondary: '#cbcbd226',
  },
  green: {
    primary: '#0b6623',
    secondary: '#e8fde7',
  },
};

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AppointmentsComponent implements OnInit {
  //================== CALENDAR RELATED PROPS ======================

  view: CalendarView = CalendarView.Week;

  viewDate: Date;
  viewDateEnd: Date;

  dayStartHour: number;
  dayEndHour: number;
  hourSegmentHeight = 80;

  daysInWeek = 7;
  workHours: WorkHours;

  //================================================================

  appointments: CalendarEvent<{ appointment: Appointment }>[];
  examinationTypes: ExaminationType[];
  doctorId: number;
  private userSub: Subscription;
  isLoading: boolean = false;

  canClick: boolean = false;
  selectedEvent: CalendarEvent<{ appointment: Appointment }> = {
    title: null as any,
    start: null as any,
    color: { ...colors['blue'] },
    end: null as any,
    meta: null as any,
    id: null as any,
  };

  constructor(
    private appointmentService: ScheduleService,
    private router: Router,
    private toaster: ToastrService,
    private authService: AuthService,
    private bottomSheet: MatBottomSheet
  ) {}

  ngOnInit(): void {
    this.canClick = false;
    this.viewDate = new Date();
    this.viewDateEnd = addDays(this.viewDate, 6);
    this.examinationTypes = Object.values(ExaminationType);
    this.userSub = this.authService.user.subscribe((user) => {
      this.doctorId = user.id;
    });

    this.getDoctorsWorkHours(this.doctorId);
    this.getAllAppointments(this.doctorId);
  }

  getDoctorsWorkHours(doctorId: number) {
    this.isLoading = true;
    this.appointmentService
      .getDoctorsWorkHours(doctorId)
      .subscribe((result) => {
        this.workHours = result;
        let startDate = new Date(this.workHours.start);
        let endDate = new Date(this.workHours.end);
        this.dayStartHour = startDate.getHours();
        this.dayEndHour = endDate.getHours();
        this.isLoading = false;
      });
  }

  getAllAppointments(doctorId: number): void {
    this.isLoading = true;
    this.appointmentService
      .getAllAppointments(doctorId)
      .pipe(
        map((results: Appointment[]) => {
          return results.map((appointment: Appointment) => {
            return {
              title: this.createTitle(appointment),
              start: new Date(appointment.date),
              color: { ...colors['blue'] },
              end: new Date(appointment.endDate),
              meta: {
                appointment,
              },
            };
          });
        })
      )
      .subscribe(
        (response: CalendarEvent<{ appointment: Appointment }>[]) => {
          this.appointments = response;
          this.isLoading = false;
        },
        (error: HttpErrorResponse) => {
          this.toaster.error(error.error);
          this.isLoading = false;
        }
      );
  }

  scheduleView() {
    this.router.navigate(['/app/appointments/scheduling']);
  }

  createTitle(appointment: Appointment): string {
    return (
      this.examinationTypes[appointment.examType] +
      '\n' +
      appointment.patient.firstName +
      ' ' +
      appointment.patient.lastName +
      '\n' +
      appointment.room.floor.building.name +
      ', Floor: ' +
      appointment.room.floor.number +
      ', Room: ' +
      appointment.room.number
    );
  }

  handleCurrent(): void {
    this.viewDate = new Date();
    this.viewDateEnd = addDays(this.viewDate, 6);
  }

  handlePrevious(): void {
    this.viewDate = subDays(this.viewDate, 7);
    this.viewDateEnd = addDays(this.viewDate, 6);
  }

  handleNext(): void {
    this.viewDate = addDays(this.viewDate, 7);
    this.viewDateEnd = addDays(this.viewDate, 6);
  }

  onEventClick(event: any): void {
    this.canClick = true;
    this.selectedEvent.color = colors['blue'];
    this.selectedEvent = event.event;
    this.selectedEvent.color = colors['green'];
  }

  rescheduleAppointment(event: any): void {
    this.router.navigate([
      '/app/reschedule-appointment',
      this.selectedEvent.meta?.appointment.id,
    ]);
  }

  cancelAppointment(event: any): void {
    console.log('...');
    this.appointmentService
      .deleteAppointment(this.selectedEvent.meta?.appointment.id as number)
      .subscribe((data) => {
        this.toaster.success('Successfuly canceled appointment');
      });
  }

  doubleClick(event: any): void {
    var url =
      'app/anamneses-pdf/' + this.selectedEvent.meta?.appointment.id.toString();
    if (this.selectedEvent.meta?.appointment.isDone) {
      this.router.navigate([url]);
    }
  }

  openBottomSheet(event: any): void {
    this.canClick = true;
    this.selectedEvent.color = colors['blue'];
    this.selectedEvent = event.event;
    this.selectedEvent.color = colors['green'];
    this.bottomSheet.open(BottomSheetComponent, {
      data: { appointmentId: this.selectedEvent.meta?.appointment.id },
    });
  }
}
