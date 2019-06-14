import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'payments-list',
  templateUrl: './payments-list.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentsListComponent implements OnInit {
  @Input() source: any[];

  displayedColumns: string[] = ['id', 'amount', 'date'];

  constructor() {}

  ngOnInit() {}
}
