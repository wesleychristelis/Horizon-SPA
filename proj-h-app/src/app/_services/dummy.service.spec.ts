/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DummyService } from './dummy.service';

describe('Service: Dummy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DummyService]
    });
  });

  it('should ...', inject([DummyService], (service: DummyService) => {
    expect(service).toBeTruthy();
  }));
});
