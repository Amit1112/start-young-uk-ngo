import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly baseApiUrl = ' https://spring-petclinic-220927145938.azurewebsites.net';

  constructor(private http: HttpClient) { }

  getAboutUsInfo(): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/aboutUs');
  }
}
