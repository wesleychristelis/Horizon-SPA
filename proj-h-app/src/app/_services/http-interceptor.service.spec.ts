/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpInterceptorService } from './http-interceptor.service';

describe('Service: HttpInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpInterceptorService]
    });
  });

  it('should ...', inject([HttpInterceptorService], (service: HttpInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});

// describe(`AuthHttpInterceptor`, () => {
//   let service: DataService;
//   let httpMock: HttpTestingController;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [
//         // Register Data service
//         DataService,
//         {
//           provide: HTTP_INTERCEPTORS,
//           useClass: AuthHttpInterceptor,
//           multi: true,
//         },
//       ],
//     });

//     service = TestBed.get(DataService);
//     httpMock = TestBed.get(HttpTestingController);
//   });
// });
