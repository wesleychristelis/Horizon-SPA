/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ErrorInterceptor } from './error-interceptor.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LogService } from './app-logger/log.service';

describe('Service: HttpInterceptorService', () => {
  
  let httpMock: HttpTestingController;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
          // Register Services
          ErrorInterceptor,
        ],
      });

  });

});

