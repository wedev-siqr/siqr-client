import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormBase } from '@mediomelon/ng-core';
import { NAME_REGEX, CURP_REGEX } from '@constants';
import { UsersFilterPayload } from '@models/users';

@Component({
  selector: 'user-search-form',
  templateUrl: './user-search-form.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSearchFormComponent extends FormBase<
  Partial<UsersFilterPayload>
> {
  constructor(formBuilder: FormBuilder) {
    super();
    this.form = formBuilder.group({
      code: '',
      name: ['', Validators.pattern(NAME_REGEX)],
      firstSurname: ['', Validators.pattern(NAME_REGEX)],
      secondSurname: ['', Validators.pattern(NAME_REGEX)],
      birthdate: [{ value: '', disabled: true }],
      email: ['', Validators.email],
      curp: ['', Validators.pattern(CURP_REGEX)],
    });
  }
}
