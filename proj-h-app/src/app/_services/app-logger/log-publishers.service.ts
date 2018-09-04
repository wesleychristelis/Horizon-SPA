import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { LogPublisher, LogConsole, LogLocalStorage, LogWebApi, LogPublisherConfig  } from './log-publishers';


@Injectable()
export class LogPublishersService {

  private publishersObject = environment.publishers

  constructor(private http: HttpClient) {
    // Build publishers arrays
    this.buildPublishers();
  }
      
  // Public properties
  publishers: LogPublisher[] = [];

  private buildPublishers(): void {
    let logPub: LogPublisher;
      
    for (let pub of this.publishersObject.filter(p => p.isActive)) {
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
          logPub = new LogWebApi(this.http);
          break;
        }
      }
      // Set location of logging
      logPub.location = pub.loggerLocation;
      // Add publisher to array
      this.publishers.push(logPub);
    }
  }
}
 