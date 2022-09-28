import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ReviewCommentComponent } from './review-comment/review-comment.component';

const routes: Routes = [
  { 
    path: '',
    component: AdminComponent,
    children: [
      // { path: '', redirectTo: 'review' },
      { path: 'manage-users', component: ManageUsersComponent },
      { path: 'review', component: ReviewCommentComponent },
      { path: '**', redirectTo: 'review' }
    ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
