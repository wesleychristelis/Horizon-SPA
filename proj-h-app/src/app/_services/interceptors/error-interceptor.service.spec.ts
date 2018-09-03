/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { ErrorInterceptor, ErrorInterceptorProvider } from './error-interceptor.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { LogService } from '../app-logger/log.service';
import { DummyService } from '../dummy.service';
import { environment } from '../../../environments/environment';

//https://dev.to/alisaduncan/intercepting-http-requests---using-and-testing-angulars-httpclient

describe('Service: ErrorInterceptor', () => {
  var baseUrl = environment.apiUrl;
  let service: DummyService;
  let httpMock: HttpTestingController;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
          // Register Services
          DummyService,
          ErrorInterceptorProvider
        ],
      });
  });

  // verify that no more requests remain to be consumed
  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  it('should do something', inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
    const mockResponse = [
        "value1",
        "value2",
        "value3"
    ];

    const dummyService = getTestBed().get(DummyService);

    dummyService.dummyGet().subscribe(
      response => {
        expect(response.length).toBe(3);
        expect(response[0]).toEqual("value1");
      }
    );
    debugger; // we getting an error on this expect One
    const req = httpMock.expectOne(dummyService.baseUrl);
    
    expect(req.request.method).toEqual('GET');

    req.flush(mockResponse);
    httpMock.verify();
  }));

});

