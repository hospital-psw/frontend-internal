import { BloodUnitTherapy } from './BloodUnitTherapy';
import { MedicamentTherapy } from './MedicamentTherapy';
import { Doctor } from './../../schedule/interface/Doctor';
import { Patient } from './../../schedule/interface/Patient';
import { IRoom } from './../../Manager/Model/Room';

export interface MedicalTreatment {
  id: number;
  room: IRoom;
  patient: Patient;
  doctor: Doctor;
  medicamentTherapies: MedicamentTherapy[];
  bloodUnitTherapies: BloodUnitTherapy[];
  start: Date;
  end: Date;
  active: boolean;
  report: string;
  admittanceReason: string;
}
