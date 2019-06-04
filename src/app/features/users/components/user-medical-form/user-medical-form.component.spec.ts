import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMedicalFormComponent } from './user-medical-form.component';

describe('UserMedicalFormComponent', () => {
  let component: UserMedicalFormComponent;
  let fixture: ComponentFixture<UserMedicalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMedicalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMedicalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
