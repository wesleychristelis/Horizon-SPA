//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injectable} from '@angular/core';
import { HttpModule } from '@angular/http';

// 3rd Party

// App Components
import { AppComponent } from './app.component';
import { BannerComponent } from './shared/banner/banner.component';
import { ClientProfileComponent } from './core/client-profile/client-profile.component';
import { ClientSummaryComponent } from './core/client-summary/client-summary.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './shared/home/home.component';
import { MainMenuComponent } from './core/main-menu/main-menu.component';
import { QuickActionsComponent } from './core/quick-actions/quick-actions.component';
import { ToolbarComponent } from './core/toolbar/toolbar.component';

import { LogTestComponent } from './_services/app-logger/log-test.component';

// App Services / Guards / Helpers / Resolvers
import { AlertifyService } from './_services/alertify.service';
import { ErrorInterceptor } from './_services/error-interceptor.service';
import { LogService } from './_services/app-logger/log.service';
import { LogPublishersService } from "./_services/app-logger/log-publishers.service";
import { RouterModule } from '@angular/router';

// Routes
import { appRoutes } from './routes';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HomeComponent,
    ClientProfileComponent,
    ClientSummaryComponent,
    FooterComponent,
    MainMenuComponent,
    QuickActionsComponent,
    ToolbarComponent,
    //Testing
    LogTestComponent,   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AlertifyService,
    ErrorInterceptor,
    LogService,
    LogPublishersService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }