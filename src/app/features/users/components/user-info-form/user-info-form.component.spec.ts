import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import fromModule from './user-info-form.module';
import { UserInfoFormComponent } from './user-info-form.component';

describe('UserInfoFormComponent', () => {
  let component: UserInfoFormComponent;
  let fixture: ComponentFixture<UserInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: fromModule.COMMON_DECLARATIONS,
      imports: fromModule.COMMON_IMPORTS,
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
