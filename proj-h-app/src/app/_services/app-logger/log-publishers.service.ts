import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { LogPublisher, LogConsole, LogLocalStorage, LogWebApi, LogPublisherConfig  } from './log-publishers';

const PUBLISHERS_FILE = './assets/log-publishers.json';

@Injectable()
export class LogPublishersService {

  constructor(private http: HttpClient) {
    // Build publishers arrays
    this.buildPublishers();
  }
      
  // Public properties
  publishers: LogPublisher[] = [];
  
  getLoggers(): Observable<LogPublisherConfig[]> {
    return this.http.get(PUBLISHERS_FILE)
      .map(response => response)
      .catch(this.handleErrors);
  }

  private buildPublishers(): void {
    let logPub: LogPublisher;
        
    this.getLoggers().subscribe(response => {
      for (let pub of response.filter(p => p.isActive)) {
        switch (pub.loggerName.toLowerCase()) {
          case "console":
            logPub = new LogConsole();
            break;
          case "localstorage":
            logPub = new LogLocalStorage();
            break;
          case "webapi":
            logPub = new LogWebApi(this.http);
            break;
        }
        // Set location of logging
        logPub.location = pub.loggerLocation;
        // Add publisher to array
        this.publishers.push(logPub);
      }
    });
  }

  private handleErrors(error: any): Observable<any> {
    let errors: string[] = [];
    let msg: string = "";
        
    msg = "Status: " + error.status;
    msg += " - Status Text: " + error.statusText;
    if (error.json()) {
      msg += " - Exception Message: " + error.json().exceptionMessage;
    }
    errors.push(msg);
        
    console.error('An error occurred', errors);
        
    return Observable.throw(errors);
  }
}
 