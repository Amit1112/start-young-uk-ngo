import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { AppConstant } from '../app.constant';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    constructor(
        private http: HttpClient) { }

    getUserInfo(): Observable<any> {
        return this.http.get<any>(AppConstant.apiEndPoinUrl + AppConstant.getUserUrl);
    }

    registerUser(userInfo: any) {
        return this.http.post(AppConstant.apiEndPoinUrl + AppConstant.signUpUrl, userInfo);
    }
}
