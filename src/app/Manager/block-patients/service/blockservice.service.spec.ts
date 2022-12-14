import { TestBed } from '@angular/core/testing';

import { BlockserviceService } from './blockservice.service';

describe('BlockserviceService', () => {
  let service: BlockserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
