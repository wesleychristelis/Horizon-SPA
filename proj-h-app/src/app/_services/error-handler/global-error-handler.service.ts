import { Injectable, ErrorHandler } from '@angular/core';
import { LogService } from '../app-logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(private logger: LogService) { }

  handleError(error: any): void {
    throw new Error("Method not implemented.");
  }
}
