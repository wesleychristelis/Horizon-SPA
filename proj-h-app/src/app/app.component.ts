import { Component, OnInit } from '@angular/core';
import { LogService }  from './_services/app-logger/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public today: number = Date.now();
  public title = 'Axon';

  constructor(private logService: LogService){}

  ngOnInit(): void {
    this.logService.debug("Test the log() Method", [1]);
  }
 
}
