import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPhotoFormComponent } from './user-photo-form.component';

describe('UserPhotoFormComponent', () => {
  let component: UserPhotoFormComponent;
  let fixture: ComponentFixture<UserPhotoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPhotoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPhotoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
