import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpUserEvent, HttpRequest, HttpResponse, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LogService } from '../app-logger/log.service';
import { LogPublishersService } from '../app-logger/log-publishers.service';



@Injectable({
  providedIn: 'root'
})
export class TimerInterceptor implements HttpInterceptor {

  constructor(private logger: LogService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    var start = performance.now(); 
    
    return next.handle(req).pipe(map( response => {
      //this.logger.info('Url: '+ req.url + ' took ' + (performance.now() - start) + 'ms',[])
      return response;
    }))
  }
}

export const TimerIntProvidererceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: TimerInterceptor,
  multi: true
};
