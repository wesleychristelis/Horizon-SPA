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
  
}
