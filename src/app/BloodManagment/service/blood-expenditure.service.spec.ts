import { TestBed } from '@angular/core/testing';

import { BloodExpenditureService } from './blood-expenditure.service';

describe('BloodExpenditureService', () => {
  let service: BloodExpenditureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodExpenditureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
