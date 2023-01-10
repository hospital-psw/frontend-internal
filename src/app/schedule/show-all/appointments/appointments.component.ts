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
import { map, Subject, Observable, Subscription, Cons } from 'rxjs';
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
import { Consilium } from '../../interface/Consilium';
import { DisplayConsiliumDto } from '../../interface/DisplayConsiliumDto';
import { VacationRequest } from 'src/app/vacation-request/model/interface/vacation-request';
import { DoctorSchedule } from '../../interface/DoctorSchedule';
import {
  createEmptyAppointment,
  createEmptyConsilium,
  createEmptyVacationRequest,
} from './helper';
import { Doctor } from '../../interface/Doctor';
import { doc } from 'prettier';
import { IRoom } from 'src/app/Manager/Model/Room';
import { Role } from '../../enum/Role.enum';
import { Specialization } from '../../enum/Specialization.enum';
import { Patient } from '../../interface/Patient';
import { VacationRequestStatus } from 'src/app/vacation-request/model/enum/vacation-request-status';
import { BottomSheetScheduleComponent } from '../bottom-sheet-schedule/bottom-sheet-schedule.component';

const colors: Record<string, EventColor> = {
  red: {
    primary: '#ff1744',
    secondary: '#ef5350',
  },
  blue: {
    primary: '#5579C6',
    secondary: '#3A98DC',
  },
  green: {
    primary: '#01A66F',
    secondary: '#75CE9f',
  },
  selectedblue: {
    primary: '#0E4C92',
    secondary: '#537895',
  },
  selectedred: {
    primary: '#ff1744',
    secondary: '#ef5350',
  },
  selectedgreen: {
    primary: '#01A66F',
    secondary: '#75CE9f',
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

  appointments: CalendarEvent<{
    appointment: Appointment;
  }>[];
  consiliums: CalendarEvent<{ consilium: DisplayConsiliumDto }>[];
  examinationTypes: ExaminationType[];
  doctorId: number;
  private userSub: Subscription;
  isLoading: boolean = false;
  doctorSchedule: DoctorSchedule;

  calendarEvents: CalendarEvent<{
    appointment: Appointment;
    consilium: DisplayConsiliumDto;
    vacation: VacationRequest;
  }>[];

  canClick: boolean = false;
  selectedEvent: CalendarEvent<{
    appointment: Appointment;
    consilium: DisplayConsiliumDto;
    vacation: VacationRequest;
  }> = {
    title: null as any,
    start: null as any,
    color: { ...colors['blue'] },
    end: null as any,
    meta: null as any,
    id: null as any,
  };

  previous: CalendarEvent<{
    appointment: Appointment;
    consilium: DisplayConsiliumDto;
    vacation: VacationRequest;
  }> = {
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
    this.calendarEvents = [];
    this.viewDate = new Date();
    this.viewDateEnd = addDays(this.viewDate, 6);
    this.examinationTypes = Object.values(ExaminationType);
    this.userSub = this.authService.user.subscribe((user) => {
      this.doctorId = user.id;
    });

    this.getDoctorSchedule(this.doctorId);
    setTimeout(() => {
      this.createCalendarEvents(this.doctorSchedule);
    }, 1000);
    this.getDoctorsWorkHours(this.doctorId);
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

  getDoctorSchedule(doctorId: number): void {
    this.isLoading = true;
    this.appointmentService.getDoctorsSchedule(doctorId).subscribe(
      (response) => {
        this.doctorSchedule = response;
        this.isLoading = false;
      },
      (error: HttpErrorResponse) => {
        this.isLoading = false;
        if (error.status != 404) {
          this.toaster.error(error.error);
        }
      }
    );
  }

  createCalendarEvents(doctorSchedule: DoctorSchedule) {
    for (let appointment of doctorSchedule.appointments) {
      this.calendarEvents.push({
        title: this.createTitle(appointment),
        start: new Date(appointment.date),
        color: { ...colors['blue'] },
        end: new Date(appointment.endDate),
        meta: {
          appointment: appointment,
          consilium: createEmptyConsilium(),
          vacation: createEmptyVacationRequest(),
        },
      });
    }

    for (let vacation of doctorSchedule.vacations) {
      this.calendarEvents.push({
        title: 'VACATION',
        start: new Date(vacation.from),
        cssClass: 'text-white',
        color: { ...colors['green'] },
        end: new Date(vacation.to),
        meta: {
          appointment: createEmptyAppointment(),
          consilium: createEmptyConsilium(),
          vacation: vacation,
        },
      });
    }

    for (let consilium of doctorSchedule.consiliums) {
      this.calendarEvents.push({
        title: 'CONSILIUM ' + '\n' + consilium.topic,
        start: new Date(consilium.startDateTime),
        color: { ...colors['red'] },
        end: new Date(consilium.endDateTime),
        meta: {
          appointment: createEmptyAppointment(),
          consilium: consilium,
          vacation: createEmptyVacationRequest(),
        },
      });
    }
  }

  scheduleView() {
    this.bottomSheet.open(BottomSheetScheduleComponent);
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
    this.previous = this.selectedEvent;
    this.selectedEvent = event.event;
    this.canClick = true;
    this.colorAppointment(this.previous, false);
    this.colorAppointment(this.selectedEvent, true);
    if (this.selectedEvent.meta?.appointment.id == -1) return;
    this.bottomSheet.open(BottomSheetComponent, {
      data: { appointmentId: this.selectedEvent.meta?.appointment.id },
    });
  }

  colorAppointment(
    event: CalendarEvent<{
      appointment: Appointment;
      consilium: DisplayConsiliumDto;
      vacation: VacationRequest;
    }>,
    selected: boolean
  ): void {
    if (!event) return;
    if (event.meta?.appointment.id != -1) {
      if (selected) {
        event.color = colors['selectedblue'];
      } else {
        event.color = colors['blue'];
      }
    } else if (event.meta?.consilium.id != -1) {
      if (selected) {
        event.color = colors['selectedred'];
      } else {
        event.color = colors['red'];
      }
    } else if (event.meta?.vacation.id != -1) {
      if (selected) {
        event.color = colors['selectedgreen'];
      } else {
        event.color = colors['green'];
      }
    }
  }
}
