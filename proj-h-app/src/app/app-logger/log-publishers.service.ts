import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

class LogPublisherConfig {
    loggerName: string;
    loggerLocation: string;
    isActive: boolean;
}
  
const PUBLISHERS_FILE =
  "/src/app/assets/log-publishers.json";

@Injectable()
export class LogPublishersService{
    
    constructor(private http: Http) {
        this.buildPublishers();
      }

      buildPublishers(): void {
        // Create instance of LogConsole Class
        this.publishers.push(new LogConsole());
        // Create instance of LogLocalStorage Class
        this.publishers.push(new LogLocalStorage());
        // Create instance of LogWebApi Class
        this.publishers.push(
                new LogWebApi(this.http));
      }

      getLoggers(): Observable<LogPublisherConfig[]> {
        return this.http.get(PUBLISHERS_FILE)
          .map(response => response.json())
          .catch(this.handleErrors);
      }
}



