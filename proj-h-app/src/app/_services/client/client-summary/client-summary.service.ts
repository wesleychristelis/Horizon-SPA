import { Injectable } from '@angular/core';
import { CLIENT } from '../../../_mock/client-summary.mock-data';

@Injectable({
  providedIn: 'root'
})
export class ClientSummaryService {

  constructor() { }
  
  getClient() { return CLIENT; }
}
