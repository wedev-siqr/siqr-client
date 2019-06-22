import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DisableForm } from '@classes/disable-form';
import { CURP_REGEX, NAME_REGEX, PHONE_REGEX } from '@constants';
import { Membership } from '@models/memberships';
import { ClientInfo } from '@models/users';

@Component({
  selector: 'user-info-form',
  templateUrl: './user-info-form.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoFormComponent extends DisableForm {
  @Input() set info(info: ClientInfo | any) {
    if (!info) return;

    this.form.patchValue({
      ...info,
      membership: this.form.disabled
        ? info.membership.name
        : info.membership.id,
    });
  }

  @Input() memberships: Membership[];

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
      membership: ['', Validators.required],
    });
  }

  ngOnInit() {}
}
