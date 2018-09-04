//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
import { ErrorInterceptorProvider } from './_services/interceptors/error-interceptor.service';
import { TimerIntProvidererceptor } from './_services/interceptors/timer-interceptor.service';
import { LogService } from './_services/app-logger/log.service';
import { LogPublishersService } from "./_services/app-logger/log-publishers.service";
import { RouterModule } from '@angular/router';
import { ClientProfileService } from './_services/client/client-profile/client-profile.service';
import { ClientSummaryService } from './_services/client/client-summary/client-summary.service';

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
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AlertifyService,
    ErrorInterceptorProvider,
    LogService,
    LogPublishersService,
    TimerIntProvidererceptor,
    ClientProfileService,
    ClientSummaryService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }