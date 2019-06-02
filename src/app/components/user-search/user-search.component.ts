import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { UserSearchFormComponent } from '@components/user-search-form/user-search-form.component';
import { UsersFilterPayload } from '@models/users';

@Component({
  selector: 'user-search',
  templateUrl: './user-search.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSearchComponent implements OnInit {
  @ViewChild(UserSearchFormComponent, { static: false })
  form: UserSearchFormComponent;

  @Output() search: EventEmitter<Partial<UsersFilterPayload>>;

  constructor() {}

  ngOnInit() {}
}
