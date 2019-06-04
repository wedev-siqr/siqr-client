import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Membership } from '@models/membership';
import { CreateMembershipFormComponent } from '../../components/create-membership-form/create-membership-form.component';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateComponent implements OnInit {
  @ViewChild(CreateMembershipFormComponent, { static: false })
  form: CreateMembershipFormComponent;

  constructor() {}

  ngOnInit() {}

  onSubmit(membership: Membership) {
    console.log({ membership });
  }

  submit() {
    this.form.submit();
  }
}
