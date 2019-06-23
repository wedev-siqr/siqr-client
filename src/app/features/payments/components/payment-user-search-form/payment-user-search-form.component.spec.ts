import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentUserSearchFormComponent } from './payment-user-search-form.component';

describe('PaymentUserSearchFormComponent', () => {
  let component: PaymentUserSearchFormComponent;
  let fixture: ComponentFixture<PaymentUserSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentUserSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentUserSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
