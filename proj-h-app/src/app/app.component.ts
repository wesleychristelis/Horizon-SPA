import { Component } from '@angular/core';
import { LogService }  from './app-logger/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proj-h-app';
  constructor(private logService: LogService){ 
    logService.log("App component logger");
  }

  debug(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Debug,
                    optionalParams);
  }
        
  info(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Info,
                    optionalParams);
  }
        
  warn(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Warn,
                    optionalParams);
  }
        
  error(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Error,
                    optionalParams);
  }
        
  fatal(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Fatal,
                    optionalParams);
  }
        
  log(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.All,
                    optionalParams);
  }
}
