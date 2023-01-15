// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const hospitalApi = 'https://hospitalapiserver.azurewebsites.net/api';
const integrationApi = 'https://integrationapiserver.azurewebsites.net/api';
export const environment = {
  production: false,
  apiAppointmentUrl: hospitalApi + '/Appointment',
  apiPatientUrl: hospitalApi + '/ApplicationPatient',
  apiVacationRequestUrl: hospitalApi + '/VacationRequests',
  apiDoctorUrl: hospitalApi + '/ApplicationDoctor',
  apiMedicalTreatment: hospitalApi + '/MedicalTreatment',
  apiMedicamentTherapy: hospitalApi + '/MedicamentTherapy',
  apiBloodUnitTherapy: hospitalApi + '/BloodUnitTherapy',
  apiRooms: hospitalApi + '/Rooms',
  apiBloodAcquisition: hospitalApi + '/BloodAcquisition',
  apiBloodExpenditure: hospitalApi + '/BloodExpenditure',
  apiBloodUnit: hospitalApi + '/BloodUnit',
  apiMedicine: hospitalApi + '/Medicament',
  apiStatistics: hospitalApi + '/Statistical',
  apiAuthUrl: hospitalApi + '/Auth/login',
  apiAnamnesisPdfUrl: hospitalApi + '/Anamnesis/pdf',
  apiSymptom: hospitalApi + '/Symptom',
  apiAnamnesis: hospitalApi + '/Anamnesis',
  apiPerscription: hospitalApi + '/Prescription',
  apiConsiliumUrl: hospitalApi + '/Consilium',
  apiApplicationPatient: hospitalApi + '/ApplicationPatient',
  apiUrgentBloodTransfer: integrationApi + '/UrgentBloodTransfer',
  apiExaminationEvent: hospitalApi + '/ExaminationEvent',
  apiDoctorSchedule: hospitalApi + '/DoctorSchedule',
  apiBloodBank: integrationApi + '/BloodBank',
  apiBloodAddition: hospitalApi + '/BloodAdditon',
  apiFeedback: hospitalApi + '/Feedback',
  apiRelocation: hospitalApi + '/Relocation',
  apiMap: hospitalApi + '/Map',
  apiFloors: hospitalApi + '/Floors',
  apiBuildings: hospitalApi + '/Buildings',
  apiEquipment: hospitalApi + '/Equipment',
  apiNews: integrationApi + '/News',
  apiTender: integrationApi + '/Tender',
  apiTenderHospital: hospitalApi + '/Tender',
  apiTenderIntegration: integrationApi + '/Tender',
  apiEvent: hospitalApi + '/Event',
  apiRenovation: hospitalApi + '/Renovation',
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
