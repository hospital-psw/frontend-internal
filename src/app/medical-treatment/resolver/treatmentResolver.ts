import { MedicalTreatment } from '../interface/MedicalTreatment';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { MedicalTreatmentService } from '../service/medical-treatment.service';

@Injectable({
  providedIn: 'root',
})
export class TreatmentResolver implements Resolve<MedicalTreatment> {
  constructor(private medTreatmentService: MedicalTreatmentService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<MedicalTreatment> {
    let treatmentId = parseInt(route.paramMap.get('id') as any);
    return this.medTreatmentService.getTreatment(treatmentId);
  }
}
