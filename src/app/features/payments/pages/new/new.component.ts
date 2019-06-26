import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClientsService } from '@services/clients.service';
import { PaymentsService } from '@services/payments.service';
import { BehaviorSubject, of, combineLatest } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { PaymentFormComponent } from '../../components/payment-form/payment-form.component';
import { PaymentUserSearchFormComponent } from '../../components/payment-user-search-form/payment-user-search-form.component';

@Component({
  selector: 'new',
  templateUrl: './new.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewComponent implements OnInit {
  @ViewChild(PaymentUserSearchFormComponent, { static: true })
  search: PaymentUserSearchFormComponent;
  @ViewChild(PaymentFormComponent, { static: true }) form: PaymentFormComponent;

  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  paymentInfo$;

  private id: any;

  constructor(
    private clientService: ClientsService,
    private paymentsService: PaymentsService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.paymentInfo$ = this.search._submit.pipe(
      tap(() => this.isLoading$.next(true)),
      switchMap(({ code }) =>
        this.clientService.getClientByCode(code).pipe(
          tap(({ id }: any) => {
            this.isLoading$.next(false);
            this.id = id;
          }),
          catchError((err) => {
            this.isLoading$.next(false);
            return of(err);
          })
        )
      )
    );
  }

  onSubmit(x) {
    this.isLoading$.next(true);
    this.paymentsService.registerPayment(this.id, x).subscribe(() => {
      this.snackbar.open('Pago registrado con éxito', 'OK');
      this.router.navigate(['/payments']);
    });
  }
}
