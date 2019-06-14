import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
} from '@angular/core';
import { UserFormLayoutComponent } from '../../components/user-form-layout/user-form-layout.component';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditComponent implements OnInit {
  @ViewChild(UserFormLayoutComponent, { static: true })
  form: UserFormLayoutComponent;

  constructor() {}

  ngOnInit() {}
}
