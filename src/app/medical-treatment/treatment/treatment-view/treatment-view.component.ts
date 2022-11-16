import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RGBA_ASTC_10x10_Format } from 'three';
import { BloodType } from '../../enum/BloodType.enum';
import { BloodUnitTherapy } from '../../interface/BloodUnitTherapy';
import { MedicalTreatment } from '../../interface/MedicalTreatment';
import { PatientRelease } from '../../interface/PatientRelease';
import { MedicamentTherapy } from '../../interface/MedicamentTherapy';
import { BloodunitTherapyService } from '../../service/bloodunit-therapy.service';
import { MedicalTreatmentService } from '../../service/medical-treatment.service';

@Component({
  selector: 'app-treatment-view',
  templateUrl: './treatment-view.component.html',
  styleUrls: ['./treatment-view.component.scss'],
})
export class TreatmentViewComponent implements OnInit {
  constructor(
    private medicalTreatmentService: MedicalTreatmentService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  medicalTreatment: MedicalTreatment;
  patientRelease: PatientRelease;
  bloodTypes: BloodType[];

  ngOnInit(): void {
    this.medicalTreatment = this.route.snapshot.data['treatment'];
    this.patientRelease = {
      description: this.medicalTreatment.report,
      treatmentId: this.medicalTreatment.id,
    };
  }

  getDateString(medicalTherapy: MedicamentTherapy) {
    if (medicalTherapy.end === new Date() || !medicalTherapy.end) {
      return (
        'Since: ' + this.datePipe.transform(medicalTherapy.start, 'dd.MM.yyyy.')
      );
    }

    return (
      'From: ' +
      this.datePipe.transform(medicalTherapy.start, 'dd.MM.yyyy.') +
      ' To: ' +
      this.datePipe.transform(medicalTherapy.end, 'dd.MM.yyyy.')
    );
  }

  getBloodType(bloodUnitTherapy: BloodUnitTherapy) {
    this.bloodTypes = Object.values(BloodType);
    return this.bloodTypes[bloodUnitTherapy.bloodUnit.bloodType as any];
  }

  isTextVisible() {
    return (
      this.medicalTreatment.bloodUnitTherapies.length === 0 &&
      this.medicalTreatment.medicamentTherapies.length === 0
    );
  }

  releasePatient() {
    if (
      !this.patientRelease.description ||
      this.patientRelease.description.length < 10
    ) {
      this.toastr.warning(
        'Please enter at least 10 characters for report description'
      );
      return;
    }
    this.medicalTreatmentService
      .releasePatient(this.patientRelease)
      .subscribe((response) => {
        this.toastr.success(
          'Medical treatment is successfully finished for patient ' +
            response.patient.firstName +
            ' ' +
            response.patient.lastName
        );
        this.medicalTreatment = response;
      });
  }

  getStatus() {
    return this.medicalTreatment.active ? 'Active' : 'Finished';
  }

  getFloorString() {
    if (this.medicalTreatment.room.floor.number === 0) {
      return 'base';
    } else if (this.medicalTreatment.room.floor.number === 1) {
      return '1st';
    } else if (this.medicalTreatment.room.floor.number === 2) {
      return '2nd';
    } else if (this.medicalTreatment.room.floor.number === 3) {
      return '3rd';
    }

    return this.medicalTreatment.room.floor.number + 'th';
  }
}
