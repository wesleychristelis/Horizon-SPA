/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TimerInterceptor } from './timer-interceptor.service';

describe('Service: TimerInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimerInterceptor]
    });
  });

  it('should ...', inject([TimerInterceptor], (service: TimerInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
