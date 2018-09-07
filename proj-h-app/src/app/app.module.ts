//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// 3rd Party
import { RatingModule } from 'ngx-bootstrap';

// App Components
import { AppComponent } from './app.component';
import { BannerComponent } from './shared/banner/banner.component';
import { ClientProfileComponent } from './core/client-profile/client-profile.component';
import { ClientScoreComponent } from './core/client-summary/client-score/client-score/client-score.component';
import { ClientSummaryComponent } from './core/client-summary/client-summary.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './shared/home/home.component';
import { MainMenuComponent } from './core/main-menu/main-menu.component';
import { ProfileActionsProfileComponent } from './core/client-summary/quick-actions/profile-actions/profile-actions-profile/profile-actions-profile.component';
import { QuickActionsComponent } from './core/client-summary/quick-actions/quick-actions.component';
import { ToolbarComponent } from './core/toolbar/toolbar.component';

import { LogTestComponent } from './_services/app-logger/log-test.component';

// App Services / Guards / Helpers / Resolvers
import { AlertifyService } from './_services/alertify.service';
import { ClientProfileService } from './_services/client/client-profile/client-profile.service';
import { ClientScorePipe } from './core/client-summary/client-score/client-score/client-score-pipe/client-score-pipe';
import { ClientSummaryService } from './_services/client/client-summary/client-summary.service';
import { ErrorInterceptorProvider } from './_services/interceptors/error-interceptor.service';
import { TimerIntProvidererceptor } from './_services/interceptors/timer-interceptor.service';
import { LogService } from './_services/app-logger/log.service';
import { LogPublishersService } from "./_services/app-logger/log-publishers.service";
import { RouterModule } from '@angular/router';
import { GlobalErrorHandlerService } from './_services/error-handler/global-error-handler.service';

// Routes
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HomeComponent,
    ClientProfileComponent,
    ClientScoreComponent,
    ClientScorePipe,
    ClientSummaryComponent,
    FooterComponent,
    MainMenuComponent,
    ProfileActionsProfileComponent,
    QuickActionsComponent,
    ToolbarComponent,
    //Testing
    LogTestComponent,   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RatingModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AlertifyService,
    ClientProfileService,
    ClientSummaryService,
    ErrorInterceptorProvider,
    LogService,
    LogPublishersService,
    TimerIntProvidererceptor, 
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }