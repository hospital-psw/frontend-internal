import { TestBed } from '@angular/core/testing';

import { ExaminationStatisticsService } from './examination-statistics.service';

describe('ExaminationStatisticsService', () => {
  let service: ExaminationStatisticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExaminationStatisticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
