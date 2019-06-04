import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMembershipFormComponent } from './create-membership-form.component';

describe('CreateMembershipFormComponent', () => {
  let component: CreateMembershipFormComponent;
  let fixture: ComponentFixture<CreateMembershipFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMembershipFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMembershipFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
