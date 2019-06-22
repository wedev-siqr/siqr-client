import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { UserSearchFormComponent } from '@components/user-search-form/user-search-form.component';
import { ClientsFilterPayload } from '@models/users';

@Component({
  selector: 'user-search',
  templateUrl: './user-search.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSearchComponent implements OnInit {
  @ViewChild(UserSearchFormComponent, { static: true })
  form: UserSearchFormComponent;

  @Output() search: EventEmitter<Partial<ClientsFilterPayload>>;

  constructor() {
    this.search = new EventEmitter();
  }

  ngOnInit() {}
}
