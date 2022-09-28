import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-comment',
  templateUrl: './review-comment.component.html',
  styleUrls: ['./review-comment.component.scss']
})
export class ReviewCommentComponent implements OnInit {

  reviews: any[] = [
    {
      id: 0,
      letterFrom: { name: 'John Smith', email: 'john@gmail.com' },
      letterTo: { name: 'John Sena', childId: 123 },
      message: "It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the accordion-body, though the transition does limit overflow"
    },
    {
      id: 1,
      letterFrom: { name: 'John Lonan', email: 'johnlonan@gmail.com' },
      letterTo: { name: 'John Lynn', childId: 123 },
      message: "It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the accordion-body, though the transition does limit overflow"
    },
    {
      id: 2,
      letterFrom: { name: 'John Parkar', email: 'john.parkar@gmail.com' },
      letterTo: { name: 'Jason Smith', childId: 123 },
      message: "It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the accordion-body, though the transition does limit overflow"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
