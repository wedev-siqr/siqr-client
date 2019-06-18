import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { FormBase } from '@mediomelon/ng-core';
import { FormBuilder, Validators } from '@angular/forms';
import { NUMBER_REGEX } from '@constants';
import { Membership } from '@models/memberships';

@Component({
  selector: 'membership-form',
  templateUrl: './membership-form.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MembershipFormComponent extends FormBase<Membership>
  implements OnInit {
  @Input() set membership(m: Membership) {
    if (m) this.form.patchValue(m);
  }

  constructor(formBuilder: FormBuilder) {
    super();
    this.form = formBuilder.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern(NUMBER_REGEX)]],
      duration: ['', [Validators.required, Validators.pattern(NUMBER_REGEX)]],
      durationTimeUnit: ['', Validators.required],
    });
  }

  ngOnInit() {}
}
