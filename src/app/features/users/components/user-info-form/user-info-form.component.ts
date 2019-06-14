import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NAME_REGEX, PHONE_REGEX, CURP_REGEX } from '@constants';
import { DisableForm } from '@classes/disable-form';

@Component({
  selector: 'user-info-form',
  templateUrl: './user-info-form.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoFormComponent extends DisableForm {
  constructor(formBuilder: FormBuilder) {
    super();
    this.form = formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(NAME_REGEX)]],
      firstSurname: ['', [Validators.required, Validators.pattern(NAME_REGEX)]],
      secondSurname: [
        '',
        [Validators.required, Validators.pattern(NAME_REGEX)],
      ],
      birthdate: ['', Validators.required],
      gender: ['', Validators.required],
      curp: ['', [Validators.required, Validators.pattern(CURP_REGEX)]],
      phone: ['', Validators.pattern(PHONE_REGEX)],
      email: ['', Validators.email],
      membershipId: ['', Validators.required],
    });
  }

  ngOnInit() {}
}
