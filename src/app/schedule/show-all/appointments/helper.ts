import { IRoom } from 'src/app/Manager/Model/Room';
import { VacationRequestStatus } from 'src/app/vacation-request/model/enum/vacation-request-status';
import { VacationRequest } from 'src/app/vacation-request/model/interface/vacation-request';
import { Role } from '../../enum/Role.enum';
import { Specialization } from '../../enum/Specialization.enum';
import { Appointment } from '../../interface/Appointment';
import { DisplayConsiliumDto } from '../../interface/DisplayConsiliumDto';
import { Doctor } from '../../interface/Doctor';
import { Patient } from '../../interface/Patient';
import { WorkHours } from '../../interface/WorkHours';

export function createEmptyConsilium(): DisplayConsiliumDto {
  return {
    id: -1,
    duration: -1,
    endDateTime: new Date(),
    startDateTime: new Date(),
    room: createEmptyRoom(),
    topic: '',
  };
}

export function createEmptyAppointment(): Appointment {
  return {
    id: -1,
    date: new Date(),
    doctor: createEmptyDoctor(),
    duration: -1,
    endDate: new Date(),
    examType: -1,
    isDone: true,
    patient: createEmptyPatient(),
    room: createEmptyRoom(),
  };
}

export function createEmptyVacationRequest(): VacationRequest {
  return {
    id: -1,
    comment: '',
    doctor: createEmptyDoctor(),
    from: new Date(),
    to: new Date(),
    managerComment: '',
    status: VacationRequestStatus.APPROVED,
    urgent: false,
  };
}

export function createEmptyRoom(): IRoom {
  return {
    id: -1,
    floor: {
      id: -1,
      number: -1,
      purpose: '',
      building: {
        id: -1,
        address: '',
        name: '',
      },
    },
    number: '',
    purpose: '',
    workingHours: createEmptyWorkingHours(),
  };
}

export function createEmptyDoctor(): Doctor {
  return {
    id: -1,
    email: '',
    firstName: '',
    lastName: '',
    offfice: createEmptyRoom(),
    role: Role.DOCTOR,
    specialization: Specialization.CARDIOLOGY,
    workingHours: createEmptyWorkingHours(),
  };
}

export function createEmptyPatient(): Patient {
  return {
    id: -1,
    bloodType: 1,
    email: '',
    firstName: '',
    guest: false,
    lastName: '',
    role: Role.PATIENT,
  };
}

export function createEmptyWorkingHours(): WorkHours {
  return {
    id: -1,
    end: new Date(),
    start: new Date(),
  };
}
