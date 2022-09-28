import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly baseApiUrl = 'https://codefest-spring-boot-backend.azurewebsites.net';

  menuItemsLinks = [
    {
      name: 'Home',
      id: 'page-top',
      isDashBoard: true
    },
    {
      name: 'Our Aim',
      id: 'aim',
      isDashBoard: true
    },
    {
      name: 'About Us',
      id: 'about',
      isDashBoard: true
    },
    {
      name: 'Contact',
      id: 'contact',
      isDashBoard: true
    },
    {
      name: 'Sign Up',
      id: 'signUp',
      isDashBoard: false
    },
    {
      name: 'Admin',
      id: 'admin',
      isDashBoard: false
    }
  ];

  constructor(private http: HttpClient) { }

  getAboutUsInfo(): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/login');
  }

  getMenuItemLinks() {
    return this.menuItemsLinks;
  }
}
