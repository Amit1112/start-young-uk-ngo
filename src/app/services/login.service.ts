import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppConstant } from '../app.constant';
import { LoginComponent } from '../login/login.component';
import { IUserType } from '../types/app.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    private userInfoSubject = new BehaviorSubject({});
    userInfoData$ = this.userInfoSubject.asObservable();

    constructor(
        private http: HttpClient) { }

    fetchUserInfo(): Observable<any> {
        let headers = new HttpHeaders();
        const jwt = window.sessionStorage.getItem('jwt') || '';
        const headerToken = `Bearer ${jwt}`;
        headers = headers.append('Authorization', headerToken);
        return this.http.get<any>(AppConstant.apiEndPoinUrl + AppConstant.getUserUrl, { headers: headers });
    }

    loginUser(loginInfo: any): Observable<any> {
        return this.http.post<any>(AppConstant.apiEndPoinUrl + AppConstant.loginUrl, loginInfo);
    }

    registerUser(userInfo: any) {
        return this.http.post(AppConstant.apiEndPoinUrl + AppConstant.signUpUrl, userInfo);
    }

    updateUserInfo(userInfo: IUserType) {
        this.userInfoSubject.next(userInfo);
    }

    logout() {
        window.sessionStorage.removeItem('jwt');
    }
}
