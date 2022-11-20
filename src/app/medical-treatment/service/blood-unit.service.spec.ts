import { TestBed } from '@angular/core/testing';

import { BloodUnitService } from './blood-unit.service';

describe('BloodUnitService', () => {
  let service: BloodUnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodUnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
