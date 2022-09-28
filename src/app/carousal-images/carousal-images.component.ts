import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousal-images',
  templateUrl: './carousal-images.component.html',
  styleUrls: ['./carousal-images.component.scss']
})
export class CarousalImagesComponent implements OnInit {
  pictureArray = [
    {
      path:'./../../assets/carouselpics/Pic1.jpg',
      name:'child1',
      title:"Become a Buddy"
    },
    {
      path:'./../../assets/carouselpics/Pic2.jpg',
      name:'child2',
      title:"Donate"
    },
    {
      path:'./../../assets/carouselpics/Pic3.jpg',
      name:'child3',
      title:"Sponsor"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
