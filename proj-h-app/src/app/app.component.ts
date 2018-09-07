import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { LogService }  from './_services/app-logger/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  public title = 'Horizon';

  constructor(private elementRef: ElementRef){}

  ngOnInit(): void {
    
  }
}
