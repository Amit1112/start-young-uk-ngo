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
      message: "Life is full of struggles and every day brings new challenges before us. To overcome those situations and achieve our desired success, we need support and appreciation from our close ones. Support can be given in many forms, even though the best wishes and encouraging messages. A message containing inspiring words, heartwarming wishes, and genuine thoughts is enough to boost up a person’s confidence and courage. Check out these simple best wishes and all the best messages below if you are looking for the perfect, heart-touching phrases to wish good luck to someone!"
    },
    {
      id: 1,
      letterFrom: { name: 'John Lonan', email: 'johnlonan@gmail.com' },
      letterTo: { name: 'John Lynn', childId: 123 },
      message: "Life doesn’t end with one failure. So push yourself towards victory, and success will be yours! Best wishes for a glowing future! Best wishes for the achieved glories, as well as the new beginnings of your life! I hope you reach the pinnacle of success! Your diligence is bound to result in prosperity and progress! Warm wishes for you! Lucky are those who are blessed with an unwavering goal in their lives! Good luck for your success!"
    },
    {
      id: 2,
      letterFrom: { name: 'John Parkar', email: 'john.parkar@gmail.com' },
      letterTo: { name: 'Jason Smith', childId: 123 },
      message: "Here is the best wish for the new year: Let there be more freedom of thought throughout the world! Fields need rain; truths need freedom of thought!” – Mehmet Murat ildan"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
