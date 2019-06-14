import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentUserInfoFormComponent } from './payment-user-info-form.component';

describe('PaymentUserInfoFormComponent', () => {
  let component: PaymentUserInfoFormComponent;
  let fixture: ComponentFixture<PaymentUserInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentUserInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentUserInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
