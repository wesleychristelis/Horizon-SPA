import { Component } from '@angular/core';
import { LogService }  from './core/services/app-logger/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today: number = Date.now();

  title = 'proj-h-app';
  constructor(private logService: LogService){ 
    
    this.logService.debug("Test the log() Method", [1]);
  }
}
