import { Component, OnInit } from '@angular/core';
import { ClientSummaryService } from '../../_services/client/client-summary/client-summary.service';
import { ClientSummary } from './client-summary';

@Component({
  selector: 'app-client-summary',
  templateUrl: './client-summary.component.html',
  styleUrls: ['./client-summary.component.css']
})
export class ClientSummaryComponent implements OnInit {

  public clientSummary : ClientSummary;
  public birthdate: Date;

  constructor( private clientSummaryService: ClientSummaryService) { }

  ngOnInit() {
    this.getClientSummary();
  }

  getClientSummary(): void {
    this.clientSummary = this.clientSummaryService.getClient();
    this.birthdate = new Date(this.clientSummary.birthDate);
  }

}
