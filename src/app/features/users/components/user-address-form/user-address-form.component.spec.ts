import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import fromModule from './user-address-form.module';
import { UserAddressFormComponent } from './user-address-form.component';

describe('UserAddressFormComponent', () => {
  let component: UserAddressFormComponent;
  let fixture: ComponentFixture<UserAddressFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: fromModule.COMMON_DECLARATIONS,
      imports: fromModule.COMMON_MODULES,
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
