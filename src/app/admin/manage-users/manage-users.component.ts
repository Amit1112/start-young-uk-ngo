import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {
  
  users: any[] = [
    {
      SrNo: '1',
      firstName:'Yash',
      lastName:'Vishwakarma',
      email:'xyz@gmail.com'
    },
    {
      SrNo: '2',
      firstName:'Rahul',
      lastName:'kumar',
      email:'abcd@gmail.com'
    },
    {
      SrNo: '3',
      firstName:'Mayur',
      lastName:'Thorat',
      email:'abc@gmail.com'
    },
    {
      SrNo: '4',
      firstName:'Yash',
      lastName:'Agarwal',
      email:'mnl@gmail.com'
    }
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
