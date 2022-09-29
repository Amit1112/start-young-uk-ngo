import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { AppConstant } from './app.constant';
import { DashboardService } from './services/dashboard.service';
import { IMenuItemLink } from './types/app.interface';
import { NgxSpinnerService } from 'ngx-spinner';

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
  loggedInUser={name:'Mayur'};

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private dashboardService: DashboardService,
    private spinnerService: NgxSpinnerService) {
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
    this.menuItemLinks = this.dashboardService.getMenuItemLinks();
  }

  openLoginModal() {
    this.dashboardService.openLoginModal();
  }
}
