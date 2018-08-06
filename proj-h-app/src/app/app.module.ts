import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injectable} from '@angular/core';
import { HttpModule } from '@angular/http';
import { LogService } from './app-logger/log.service';
import { LogTestComponent } from './app-logger/log-test.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LogTestComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    LogService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
