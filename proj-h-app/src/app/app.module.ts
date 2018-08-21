import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injectable} from '@angular/core';
import { HttpModule } from '@angular/http';
import { LogService } from './core/services/app-logger/log.service';
import { LogTestComponent } from './core/services/app-logger/log-test.component';
import { LogPublishersService } from "./core/services/app-logger/log-publishers.service";

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { ClientProfileComponent } from './core/client-profile/client-profile.component';
import { ClientSummaryComponent } from './core/client-summary/client-summary.component';
import { QuickActionsComponent } from './core/quick-actions/quick-actions.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LogTestComponent,
    HomeComponent,
    ClientProfileComponent,
    ClientSummaryComponent,
    QuickActionsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    LogService,
    LogPublishersService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
