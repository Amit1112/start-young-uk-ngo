import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    pincode: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    emailId: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
  });

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    // TODO: API Intrgn
    console.warn(this.profileForm.value);
  }

  resetForm() {
    this.profileForm.reset();
  }

}
