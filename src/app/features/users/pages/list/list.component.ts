import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UsersFilterPayload } from '@models/users';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  data$ = [{}, {}, {}, {}, {}, {}, {}];

  constructor() {}

  ngOnInit() {}

  onSearch(filter: UsersFilterPayload) {}
}
