import { TestBed } from '@angular/core/testing';

import { BloodStorageService } from './blood-storage.service';

describe('BloodStorageService', () => {
  let service: BloodStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
