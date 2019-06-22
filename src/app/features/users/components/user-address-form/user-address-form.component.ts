import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { DisableForm } from '@classes/disable-form';
import { FormBuilder, Validators } from '@angular/forms';
import {
  DIRECTION_STREET_REGEX,
  DIRECTION_NUMBER_REGEX,
  POSTAL_CODE_REGEX,
} from '@constants';
import { ClientAddress } from '@models/users';

@Component({
  selector: 'user-address-form',
  templateUrl: './user-address-form.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserAddressFormComponent extends DisableForm implements OnInit {
  @Input() set address(address: ClientAddress) {
    if (!address) return;

    this.form.patchValue(address);
  }

  constructor(formBuilder: FormBuilder) {
    super();
    this.form = formBuilder.group({
      street: [
        '',
        [Validators.required, Validators.pattern(DIRECTION_STREET_REGEX)],
      ],
      externalNumber: [
        '',
        [Validators.required, Validators.pattern(DIRECTION_NUMBER_REGEX)],
      ],
      internalNumber: ['', Validators.pattern(DIRECTION_NUMBER_REGEX)],
      postalCode: [
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
