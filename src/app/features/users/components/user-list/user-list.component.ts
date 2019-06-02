import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnInit {
  @Input() source: any[];

  displayedColumns: string[] = ['id', 'name', 'registerDate', 'actions'];

  constructor() {}

  ngOnInit() {}
}
