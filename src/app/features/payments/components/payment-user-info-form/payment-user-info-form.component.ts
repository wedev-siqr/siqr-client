import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { UserPaymentInfo } from '@models/payments';
import { FormBase } from '@mediomelon/ng-core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'payment-user-info-form',
  templateUrl: './payment-user-info-form.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentUserInfoFormComponent extends FormBase<UserPaymentInfo>
  implements OnInit {
  @Input() set userPaymentInfo(upi: UserPaymentInfo) {
    if (!upi) return;

    const time = Math.abs(
      new Date().getTime() - new Date(upi.expireDate).getTime()
    );

    const daysBeforeExpire = Math.round(time / (1000 * 60 * 60 * 24));

    this.form.patchValue({
      ...upi,
      daysBeforeExpire,
    });
  }

  constructor(formBuilder: FormBuilder) {
    super();
    this.form = formBuilder.group({
      membership: '',
      expireDate: '',
      price: '',
      daysBeforeExpire: '',
    });

    this.form.disable();
  }

  ngOnInit() {}
}
