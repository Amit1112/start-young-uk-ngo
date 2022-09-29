import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

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
    }
  ];

  private menuItemsSubject = new BehaviorSubject(this.menuItemsLinks);
  menuItemsData$ = this.menuItemsSubject.asObservable();

  constructor(
    private modalService: NgbModal) {
      this.updateMenuItemLinks();
    }

  getMenuItemLinks() {
    return this.menuItemsData$;
  }

  updateMenuItemLinks() {
    return this.menuItemsSubject.next(this.menuItemsLinks);
  }
  openLoginModal() {
    this.modalService.open(LoginComponent);
  }
}
