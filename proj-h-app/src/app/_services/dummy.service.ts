import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public dummyGet(): Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl + 'values/');
  }

  public dummyGetByID(id): Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl + 'values/' + id);
  }

  public dummyPost() {
    return this.http.post(this.baseUrl + 'users/', "wesley");
  }
}
