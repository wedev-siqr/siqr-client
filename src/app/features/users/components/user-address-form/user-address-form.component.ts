import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DisableForm } from '@classes/disable-form';
import { FormBuilder, Validators } from '@angular/forms';
import {
  DIRECTION_STREET_REGEX,
  DIRECTION_NUMBER_REGEX,
  POSTAL_CODE_REGEX,
} from '@constants';

@Component({
  selector: 'user-address-form',
  templateUrl: './user-address-form.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserAddressFormComponent extends DisableForm implements OnInit {
  constructor(formBuilder: FormBuilder) {
    super();
    this.form = formBuilder.group({
      street: [
        '',
        [Validators.required, Validators.pattern(DIRECTION_STREET_REGEX)],
      ],
      external_number: [
        '',
        [Validators.required, Validators.pattern(DIRECTION_NUMBER_REGEX)],
      ],
      internal_number: ['', Validators.pattern(DIRECTION_NUMBER_REGEX)],
      postal_code: [
        '',
        [Validators.required, Validators.pattern(POSTAL_CODE_REGEX)],
      ],
      district: ['', Validators.required],
      municipality: ['', Validators.required],
      state: ['', Validators.required],
    });
  }

  ngOnInit() {}
}
