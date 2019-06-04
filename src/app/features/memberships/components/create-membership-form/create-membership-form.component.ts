import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MEMBERSHIP_NAME_REGEX, MEMBERSHIP_RENOVATION_TYPES } from '@constants';
import { FormBase } from '@mediomelon/ng-core';
import { Subscription } from 'rxjs';
import { Membership } from '@models/membership';

@Component({
  selector: 'create-membership-form',
  templateUrl: './create-membership-form.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateMembershipFormComponent extends FormBase<Membership>
  implements OnInit {
  renovationTypes = MEMBERSHIP_RENOVATION_TYPES;

  private subcription: Subscription;

  constructor(formBuilder: FormBuilder) {
    super();
    this.form = formBuilder.group({
      name: [
        '',
        [Validators.required, Validators.pattern(MEMBERSHIP_NAME_REGEX)],
      ],
      price: ['', [Validators.required, Validators.min(0)]],
      duration: ['', [Validators.required, Validators.min(1)]],
      duration_time_unit: ['', Validators.required],
    });
  }

  ngOnInit() {}
}
