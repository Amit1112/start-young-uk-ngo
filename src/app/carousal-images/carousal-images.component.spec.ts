import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousalImagesComponent } from './carousal-images.component';

describe('CarousalImagesComponent', () => {
  let component: CarousalImagesComponent;
  let fixture: ComponentFixture<CarousalImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarousalImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarousalImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
