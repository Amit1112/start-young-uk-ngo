import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousal-images',
  templateUrl: './carousal-images.component.html',
  styleUrls: ['./carousal-images.component.scss']
})
export class CarousalImagesComponent implements OnInit {
  pictureArray = [
    {
      path:'./../../assets/carouselpics/pikwizard-e91d418034123f70db66c3a5fd9aa403.jpg',
      name:'child1',
      title:"Become a Buddy"
    },
    {
      path:'./../../assets/carouselpics/pikwizard-a0ab9d49904430b8f0558ffba3c9feaf.jpg',
      name:'child2',
      title:"Donate"
    },
    {
      path:'./../../assets/carouselpics/pexels-pixabay-50581.jpg',
      name:'child3',
      title:"Sponsor"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
