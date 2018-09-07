import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-score',
  templateUrl: './client-score.component.html',
  styleUrls: ['./client-score.component.css']
})
export class ClientScoreComponent implements OnInit {

  public max = 5;
  public score: number;
  isReadonly = true;

  constructor() { }

  ngOnInit() {
    this.score = 1;
  }

  // TODO: Investigate cleaner approach
  public populateRating(index: number){

    // We are at the begining of the rating
    if(index === 0)
    {
      if(this.score >= 1){
        return "begin";
      }
    }
    // We at the end of the rating
    if(index === 4)
    {
      if(index === (this.score -1)){
        return "end-full";  
      }
      if(index > (this.score -1)){
        return "end-empty";  
      }
    }

    // Otherwise
    if(index  <= (this.score - 1)){
      return "full";
    }
    if(index > (this.score - 1)){
      return "empty";
    }
  }
}
