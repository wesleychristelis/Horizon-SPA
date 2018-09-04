import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

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
    return this.http.get<LogPublisherConfig[]>(PUBLISHERS_FILE);
  }

  private buildPublishers(): void {
    let logPub: LogPublisher;
        
    this.getLoggers().subscribe((response: LogPublisherConfig[]) => {
      for (let pub of response.filter(p => p.isActive)) {
        switch (pub.loggerName.toLowerCase()) {
          case "console":{
            logPub = new LogConsole();
            break;
          }
          case "localstorage":{
            logPub = new LogLocalStorage();
            break;
          }
          case "webapi":{
            console.log("LogWebApi HIT");
            logPub = new LogWebApi(this.http);
            break;
          }
        }
        // Set location of logging
        logPub.location = pub.loggerLocation;
        console.log(logPub.location + " NEW URL")
        // Add publisher to array
        this.publishers.push(logPub);
      }
    },
    error => {
      alert("Error in LogPublishersService => getLoggers:::" + error)
      console.log("Error in LogPublishersService => getLoggers:::" + error)
    });
  }
}
 