import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LogService } from '../app-logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private logger: LogService){}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    console.log("Error Interceptor says hello");
    
    return next.handle(req).pipe(
      // Any errors on http calls
      catchError(error => {
        if (error instanceof HttpErrorResponse) {

          if (error.status === 401) {
            return throwError(error.statusText);
          }

          const applicationError = error.headers.get('Application-Error');

          if (applicationError) {
            return throwError(applicationError);
          }
          
          const serverError = error.error;
          let modalStateErrors = '';
          
          if (serverError && typeof serverError === 'object') {
            for (const key in serverError) {
              if (serverError[key]) {
                modalStateErrors += serverError[key] + '\n';
              }
            }
          }
          return throwError(modalStateErrors || serverError || 'Server Error');
        }
      })
    );
  }
}

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true
};
