import { TestBed } from '@angular/core/testing';

import { AnamnesisPdfService } from './anamnesis-pdf.service';

describe('AnamnesisPdfService', () => {
  let service: AnamnesisPdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnamnesisPdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
