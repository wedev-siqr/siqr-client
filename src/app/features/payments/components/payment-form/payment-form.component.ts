import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { FormBase } from '@mediomelon/ng-core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'payment-form',
  templateUrl: './payment-form.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentFormComponent extends FormBase implements OnInit {
  constructor(formBuilder: FormBuilder) {
    super();
    this.form = formBuilder.group({
      amount: '',
    });
    this.form.disable();
  }

  ngOnInit() {}
}
