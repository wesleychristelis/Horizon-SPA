import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LogService } from '../app-logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {

  constructor(){}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
    return next.handle(req).pipe(
      // Any errors on http calls
      catchError(error => {
        if (error instanceof HttpErrorResponse) {

          let errorMsg = { StatusText: error.statusText, Message: error.error };

          debugger;

          //We might want to destinguish between client and server type error codes, 
          //thus the use of 2 conditional statments
          
          //client errors
          if (error.status === 400 || error.status === 401 || error.status === 403 || error.status === 404 || 
            error.status === 405 || error.status === 408) {

            return throwError(errorMsg);
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
