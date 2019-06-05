import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormLayoutComponent } from './user-form-layout.component';

describe('UserFormLayoutComponent', () => {
  let component: UserFormLayoutComponent;
  let fixture: ComponentFixture<UserFormLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFormLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
