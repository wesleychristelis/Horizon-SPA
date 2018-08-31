import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { LogEntry } from './log.service';
import { HttpClient } from '@angular/common/http';

export abstract class LogPublisher {
  location: string;
  abstract log(record: LogEntry): Observable<boolean>
  abstract clear(): Observable<boolean>;
}

export class LogConsole extends LogPublisher {
  log(entry: LogEntry): Observable<boolean> {
    // Log to console
    console.log(entry.buildLogString());
    return Observable.of(true);
  }
  
  clear(): Observable<boolean> {
    console.clear();
    return Observable.of(true);
  }
}

export class LogLocalStorage extends LogPublisher {
  constructor() {
    // Must call super() from derived classes
    super();
    // Set location
    this.location = "logging";
  }
      
  // Append log entry to local storage
  log(entry: LogEntry): Observable<boolean> {
    let ret: boolean = false;
    let values: LogEntry[];
      
    try {
      // Get previous values from local storage
      values = JSON.parse(localStorage.getItem(this.location)) || [];
      // Add new log entry to array
      values.push(entry);
      // Store array into local storage
      localStorage.setItem(this.location, JSON.stringify(values));
      
      // Set return value
      ret = true;
    } catch (ex) {
      // Display error in console
      console.log(ex);
    }
      
    return Observable.of(ret);
  }
      
  // Clear all log entries from local storage
  clear(): Observable<boolean> {
    localStorage.removeItem(this.location);
    return Observable.of(true);
  }
}

export class LogWebApi extends LogPublisher {

  constructor(private http: HttpClient) {
    // Must call super() from derived classes
    super();
    // Set location
    this.location = "http://localhost:3000/logtest";
  }
      
  // Add log entry to back end data store
  log(entry: LogEntry): Observable<boolean> {
    let headers = new Headers(
     { 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
      
    return this.http.post(this.location, entry, options)
    // TODO : Stringly type the return fom the API, this removes the use of the map
      .map(response => response.json())
    // TODO: Errors should get implicity handled in the Interceptor we should be able to remove this and handler error handler
      .catch(this.handleErrors);
  }
      
  // Clear all log entries from local storage
  clear(): Observable<boolean> {
    // TODO: Call Web API to clear all values
    return Observable.of(true);
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

export class LogPublisherConfig {
  loggerName: string;
  loggerLocation: string;
  isActive: boolean;
}