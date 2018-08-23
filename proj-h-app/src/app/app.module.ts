//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injectable} from '@angular/core';
import { HttpModule } from '@angular/http';

// 3rd Party

// App Components
import { AppComponent } from './app.component';
import { ClientProfileComponent } from './core/client-profile/client-profile.component';
import { ClientSummaryComponent } from './core/client-summary/client-summary.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './shared/home/home.component';
import { QuickActionsComponent } from './core/quick-actions/quick-actions.component';

import { LogTestComponent } from './_services/app-logger/log-test.component';

// App Services / Guards / Helpers / Resolvers
import { HttpInterceptorService } from './_services/http-interceptor.service';
import { LogService } from './_services/app-logger/log.service';
import { LogPublishersService } from "./_services/app-logger/log-publishers.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientProfileComponent,
    ClientSummaryComponent,
    FooterComponent,
    QuickActionsComponent,

    //Testing
    LogTestComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    HttpInterceptorService,
    LogService,
    LogPublishersService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
