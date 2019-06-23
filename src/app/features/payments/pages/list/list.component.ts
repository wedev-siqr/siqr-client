import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ClientsFilterPayload } from '@models/users';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  source = [{}, {}];

  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {}

  ngOnInit() {}

  onSearch(filters: ClientsFilterPayload) {}
}
