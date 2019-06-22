import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnInit {
  @Input() source: any[];

  @Output() delete: EventEmitter<number> = new EventEmitter();

  displayedColumns: string[] = ['id', 'name', 'registerDate', 'actions'];

  constructor() {}

  ngOnInit() {}

  onDelete(clientId: number) {
    this.delete.emit(clientId);
  }
}
