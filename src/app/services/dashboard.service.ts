import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';

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
      name: 'Sign In',
      id: 'signin',
      isModal: true
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

  constructor(
    private http: HttpClient,
    private modalService: NgbModal) { }

  getAboutUsInfo(): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/login');
  }

  getMenuItemLinks() {
    return this.menuItemsLinks;
  }

  openLoginModal() {
    this.modalService.open(LoginComponent);
  }
}
