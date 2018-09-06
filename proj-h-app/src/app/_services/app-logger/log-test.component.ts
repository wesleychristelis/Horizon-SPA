import { Component, OnInit } from "@angular/core";
import { LogService } from './log.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
      
@Component({
  selector: "log-test",
  templateUrl: "./log-test.component.html"
})
export class LogTestComponent implements OnInit {
  
  ngOnInit(): void {}
  
  constructor(private logger: LogService, private httpClient: HttpClient ) {}
      
  testLog(): void {
    this.logger.info("####### Test the log() Method #######", [1]);
    //this.logger.debug("Test the log() Method", [1]);
    // this.logger.warn("Test the log() Method");
    // this.logger.error("Test the log() Method");
    // this.logger.fatal("Test the log() Method");
    // this.logger.log("Test the log() Method");
    // this.logger.log("Test 2 Parameters",
    //             "Paul", "Smith");
    // this.logger.debug("Test Mixed Parameters",
    //                 true, false, "Paul", "Smith");
    // let values = ["1", "Paul", "Smith"];
    // this.logger.warn("Test String and Array",
    //              "Some log entry", values);  
  }

  testErrorLog(): void{

    this.logBadRequestError().subscribe(
      (result: string) => {
        console.log(result);
      });
      
    this.logUnauthorizedRequestError().subscribe(
      (result: string) =>{
        console.log(result);
      });

    this.logIncorrectUrlRequest().subscribe(
      (result: string) =>{
        console.log(result);
    });
  }
  
  private logBadRequestError(): Observable<string> {
    return this.httpClient.post<string>("http://localhost:52015/api/values/ErrorTest/", {});
  }

  private logUnauthorizedRequestError(): Observable<string> {
    return this.httpClient.get<string>("http://localhost:52015/api/values/5");
  }

  private logIncorrectUrlRequest(): Observable<string> {
    return this.httpClient.get<string>("http://localhost:52015/api/value/");
  }



}