import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { AppConstant } from './app.constant';
import { DashboardService } from './services/dashboard.service';
import { IMenuItemLink, IUserType } from './types/app.interface';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'start-young-uk';
  aboutInfo: string = '';
  brandImageUrl = AppConstant.brandImageUrl;
  menuItemLinks: IMenuItemLink[] = [];
  typeSelected: string;
  loggedInUser = {
    name: '',
    userType: ''
  };
  showChat = false;

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private dashboardService: DashboardService,
    private loginService: LoginService) {
      this.typeSelected = 'ball-atom';
    }

  ngOnInit() {
    this.titleService.setTitle("Start Young UK");
    // this.metaTagService.addTags([
    //   {
    //     name: 'keywords',
    //     content: 'Start, Young, Uk, Start Young UK, Charity Start Young UK, Start Young UK NGO, UK best NGO, best ngo, best charity, top charities UK, young uk',
    //   },
    //   { name: 'description', content: 'Start Young Uk - Start Young UK' },
    //   { name: 'robots', content: 'index, follow' },
    //   { name: 'author', content: 'Start Young UK' },
    // ]);
    this.loginService.userInfoData$.subscribe((userInfo: IUserType) => {
      this.loggedInUser = userInfo;
      if(this.loggedInUser.userType === AppConstant.ADMIN_ROLE) {
        this.addMenuLinksForAdmin();
      }
    });
    this.dashboardService.menuItemsData$.subscribe((menuItemLinks: any) => {
      this.menuItemLinks = menuItemLinks;
    });
  }

  openLoginModal() {
    this.dashboardService.openLoginModal();
  }

  openChat() {
    this.showChat = !this.showChat;
  }

  logoutUser() {
    this.loginService.logout();
  }

  addMenuLinksForAdmin() {
    this.menuItemLinks = [
      ...this.menuItemLinks,
      {
        name: 'Admin',
        id: 'admin',
        isDashBoard: false
      }
    ];
  }
}
