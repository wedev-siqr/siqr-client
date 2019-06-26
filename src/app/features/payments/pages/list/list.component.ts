import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PaymentsService } from '@services/payments.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  payments$: Observable<any[]>;

  hasPayments$: Observable<boolean>;

  constructor(private paymentsService: PaymentsService) {}

  ngOnInit() {}

  onSearch(filters: any) {
    this.isLoading$.next(true);
    this.payments$ = this.paymentsService
      .getPayments(filters)
      .pipe(tap(() => this.isLoading$.next(false)));
    this.hasPayments$ = this.payments$.pipe(
      map((payments) => !!payments.length)
    );
  }
}
