/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GlobalErrorHandlerService } from './global-error-handler.service';

describe('Service: GlobalErrorHandler', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalErrorHandlerService]
    });
  });

  it('should ...', inject([GlobalErrorHandlerService], (service: GlobalErrorHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
