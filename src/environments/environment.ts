// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiAppointmentUrl: 'http://localhost:16177/api/Appointment',
  apiPatientUrl: 'http://localhost:16177/api/Patient',
  apiVacationRequestUrl: 'http://localhost:16177/api/VacationRequests',
  apiDoctorUrl: 'http://localhost:16177/api/Doctor',
  apiMedicalTreatment: 'http://localhost:16177/api/MedicalTreatment',
  apiMedicamentTherapy: 'http://localhost:16177/api/MedicamentTherapy',
  apiBloodUnitTherapy: 'http://localhost:16177/api/BloodUnitTherapy',
  apiRooms: 'http://localhost:16177/api/Rooms',
  apiBloodUnit: 'http://localhost:16177/api/BloodUnit',
  apiMedicine: 'http://localhost:16177/api/Medicament',
  apiStatistics: 'http://localhost:16177/api/Statistical'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
