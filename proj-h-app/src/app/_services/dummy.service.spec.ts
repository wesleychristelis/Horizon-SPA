/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DummyService } from './dummy.service';
import { environment } from '../../environments/environment';
import { ErrorInterceptorProvider } from './interceptors/error-interceptor.service';
import { HttpClientModule } from '@angular/common/http';

describe('Service: Dummy', () => {
  var baseUrl = environment.apiUrl

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ],
      providers: [
        DummyService,
        ErrorInterceptorProvider
      ]
    });
  });


  // it('should hit the get api',inject([DummyService], (service: DummyService) => {
  //     service.dummyGet().subscribe((response: string[]) => {
  //       expect(response[0]).toEqual("value1");
  //     });
  // }));

  // it('should hit the get api error',inject([DummyService], (service: DummyService) => {
  //   service.dummyGetByID(1).subscribe((response: string[]) => {
  //     expect(response[0]).toEqual("value1");
  //   }, error => {
  //     debugger;
  //     console.log(error); 
  //   });
  // }));

});
