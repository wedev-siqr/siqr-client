import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
} from '@angular/core';
import { MembershipFormComponent } from '../../components/membership-form/membership-form.component';
import { Membership } from '@models/memberships';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateComponent implements OnInit {
  @ViewChild(MembershipFormComponent, { static: true })
  form: MembershipFormComponent;

  constructor() {}

  ngOnInit() {}

  onSubmit(payload: Membership) {}
}
