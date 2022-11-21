import { TestBed } from '@angular/core/testing';

import { BloodAcquisitionService } from './blood-acquisition.service';

describe('BloodAcquisitionService', () => {
  let service: BloodAcquisitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodAcquisitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
