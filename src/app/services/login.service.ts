import { HttpClient, HttpHeaders } from '@angular/common/http';
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

    logout() {
        window.sessionStorage.removeItem('jwt');
    }
}
