import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-children',
  templateUrl: './manage-children.component.html',
  styleUrls: ['./manage-children.component.scss']
})
export class ManageChildrenComponent implements OnInit {
  childs: any[] = [
    {
      SrNo: '1',
      firstName:'Mayur',
      lastName:'Thorat',
      email:'abc@gmail.com'
    },
    {
      SrNo: '2',
      firstName:'Yash',
      lastName:'Vishwakarma',
      email:'xyz@gmail.com'
    },
    {
      SrNo: '3',
      firstName:'Yash',
      lastName:'Agarwal',
      email:'mnl@gmail.com'
    },
    {
      SrNo: '4',
      firstName:'Rahul',
      lastName:'kumar',
      email:'abcd@gmail.com'
    },
    {
      SrNo: '5',
      firstName:'Mayur',
      lastName:'Thorat',
      email:'abc@gmail.com'
    }
    
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
