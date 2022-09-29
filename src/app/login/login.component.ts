import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppConstant } from '../app.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    emailId: new FormControl('', [Validators.required, Validators.pattern(AppConstant.EMAIL_REGEX)]),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private loginService: LoginService,
    public activeModal: NgbActiveModal,
    private spinnerService: NgxSpinnerService
    ) { }

  ngOnInit(): void {
  }

  login() {
    const loginObj = {
      emailId: this.loginForm.value.emailId,
      password: this.loginForm.value.password
    }
    this.spinnerService.show();
    this.loginService.loginUser(loginObj).subscribe((response) => {
      console.log("Logged IN", response);
      window.sessionStorage.setItem("jwt", response.jwt);
      this.activeModal.close('Close click');
      this.loginService.fetchUserInfo().subscribe((response) => {
        window.sessionStorage.setItem("userInfo", response);
        this.spinnerService.hide();
        this.loginService.updateUserInfo(response);
        console.log("User Info", response);
      }, (error) => {
        this.spinnerService.hide();
      });
    }, (error) => {
      this.spinnerService.hide();
    });
  }

}
