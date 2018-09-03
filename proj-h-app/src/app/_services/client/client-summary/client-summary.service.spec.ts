import { TestBed, inject } from '@angular/core/testing';

import { ClientSummaryService } from './client-summary.service';

describe('ClientSummaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientSummaryService]
    });
  });

  it('should be created', inject([ClientSummaryService], (service: ClientSummaryService) => {
    expect(service).toBeTruthy();
  }));
});
