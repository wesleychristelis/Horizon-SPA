import { Injectable, ErrorHandler } from '@angular/core';
import { LogService } from '../app-logger/log.service';
import { AlertifyService } from '../alertify.service';


@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(private logger: LogService, private alertify: AlertifyService ) { }

  handleError(error: any): void {
    
    if(error.Message == null || error.Message == "")
      error.Message = "Oops. An error has occured.";

    this.logger.error(error.StatusText + " : " + error.Message);
  
    let formattedErrMsg = '<b>' + error.StatusText + '</b>' + '<br>' + error.Message;
    this.alertify.error(formattedErrMsg);
  }
}
