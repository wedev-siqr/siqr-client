import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
} from '@angular/core';
import { Membership } from '@models/memberships';
import { MembershipFormComponent } from '../../components/membership-form/membership-form.component';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditComponent implements OnInit {
  @ViewChild(MembershipFormComponent, { static: true })
  form: MembershipFormComponent;

  constructor() {}

  ngOnInit() {}

  onSubmit(m: Membership) {}
}
