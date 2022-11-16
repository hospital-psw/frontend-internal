import { TestBed } from '@angular/core/testing';

import { MedicalTreatmentService } from './medical-treatment.service';

describe('MedicalTreatmentService', () => {
  let service: MedicalTreatmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalTreatmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
