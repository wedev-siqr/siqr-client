import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBase } from '@mediomelon/ng-core';
import { FormBuilder, Validators } from '@angular/forms';
import { CURP_REGEX } from '@constants';

@Component({
  selector: 'payment-user-search-form',
  templateUrl: './payment-user-search-form.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentUserSearchFormComponent extends FormBase implements OnInit {
  constructor(formBuilder: FormBuilder) {
    super();
    this.form = formBuilder.group({
      code: '',
      curp: ['', Validators.pattern(CURP_REGEX)],
    });
  }

  ngOnInit() {}
}
