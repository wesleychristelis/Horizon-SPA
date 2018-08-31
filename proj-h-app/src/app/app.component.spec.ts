import { TestBed, async } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing'

import { AppComponent } from './app.component';
import { LogService } from './_services/app-logger/log.service';
import { LogPublishersService } from './_services/app-logger/log-publishers.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers:[
        LogService,
        LogPublishersService
      ],
      imports:[
        RouterTestingModule,
        HttpClientTestingModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Axon'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Axon');
  }));
  
});
