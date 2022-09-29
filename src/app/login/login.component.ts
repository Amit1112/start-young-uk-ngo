import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    emailId: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private loginService: LoginService,
    public activeModal: NgbActiveModal
    ) { }

  ngOnInit(): void {
  }

  login() {
    const loginObj = {
      emailId: this.loginForm.value.emailId,
      password: this.loginForm.value.password
    }
    this.loginService.loginUser(loginObj).subscribe((response) => {
      console.log("Logged IN", response);
      window.sessionStorage.setItem("jwt", response.jwt);
      this.loginService.getUserInfo().subscribe((response) => {
        console.log("User Info", response);
      });
    });
  }

}
