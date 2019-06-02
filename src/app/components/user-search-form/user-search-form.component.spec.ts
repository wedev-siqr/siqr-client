import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import fromModule from './user-search-form.module';
import { UserSearchFormComponent } from './user-search-form.component';

describe('UserSearchFormComponent', () => {
  let component: UserSearchFormComponent;
  let fixture: ComponentFixture<UserSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: fromModule.COMMON_DECLARATIONS,
      imports: fromModule.COMMON_IMPORTS,
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
