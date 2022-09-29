import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';
import { LoginService } from '../services/login.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppConstant } from '../app.constant';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  states = ['England', 'Scotland', 'Wales', 'Northern Ireland'];
  cities = [
    'Newcastle upon Tyne',
    'Norwich',
    'Nottingham',
    'Oxford',
    'Preston',
    'Leicester',
    'Lichfield',
    'Lincoln',
    'Worcester', 'York', 'Wells', 'Wakefield', 'Cambridge', 'Chester', 'Derby'];

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    emailId: new FormControl('', [Validators.required, Validators.pattern(AppConstant.EMAIL_REGEX)]),
    password: new FormControl('', Validators.required),
    subscribe: new FormControl(true)
  });

  constructor(
    private loginService: LoginService,
    private router: Router,
    private dashboardService: DashboardService,
    private spinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
  }

  submitForm() {
    console.warn(this.profileForm.value);
    const userInfo = this.profileForm.value;
    this.spinnerService.show();

    this.loginService.registerUser(userInfo).subscribe((response) => {
      this.spinnerService.hide();
      this.router.navigate(['../home']);
      this.dashboardService.openLoginModal();
      console.log("registered", response);
    }, (error) => {
      this.spinnerService.hide();
      console.log("registeration error");
    });
  }

  resetForm() {
    this.profileForm.reset();
  }

}
