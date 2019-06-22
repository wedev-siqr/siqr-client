import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ClientsFilterPayload } from '@models/users';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  source = [{}, {}];

  constructor() {}

  ngOnInit() {}

  onSearch(filters: ClientsFilterPayload) {}
}
