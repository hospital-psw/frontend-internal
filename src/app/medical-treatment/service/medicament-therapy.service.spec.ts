import { TestBed } from '@angular/core/testing';

import { MedicamentTherapyService } from './medicament-therapy.service';

describe('MedicamentTherapyService', () => {
  let service: MedicamentTherapyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicamentTherapyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
