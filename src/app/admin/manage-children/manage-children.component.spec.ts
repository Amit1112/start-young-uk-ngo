import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageChildrenComponent } from './manage-children.component';

describe('ManageChildrenComponent', () => {
  let component: ManageChildrenComponent;
  let fixture: ComponentFixture<ManageChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageChildrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
