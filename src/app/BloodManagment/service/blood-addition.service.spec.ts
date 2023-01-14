import { TestBed } from '@angular/core/testing';

import { BloodAdditionServiceService } from './blood-addition.service';

describe('BloodAdditionServiceService', () => {
  let service: BloodAdditionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodAdditionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
