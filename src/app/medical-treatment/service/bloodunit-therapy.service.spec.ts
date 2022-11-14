import { TestBed } from '@angular/core/testing';

import { BloodunitTherapyService } from './bloodunit-therapy.service';

describe('BloodunitTherapyService', () => {
  let service: BloodunitTherapyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodunitTherapyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
