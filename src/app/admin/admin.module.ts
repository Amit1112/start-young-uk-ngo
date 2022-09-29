import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HttpClientModule } from '@angular/common/http';
import { ReviewCommentComponent } from './review-comment/review-comment.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageChildrenComponent } from './manage-children/manage-children.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AdminComponent,
    ReviewCommentComponent,
    ManageUsersComponent,
    ManageChildrenComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ]
})
export class AdminModule { }
