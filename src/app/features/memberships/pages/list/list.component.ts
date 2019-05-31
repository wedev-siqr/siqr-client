import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  dataSource = [{}, {}];

  displayedColumns = ['name', 'price', 'duration', 'timeUnit', 'actions'];

  constructor() {}

  ngOnInit() {}
}
