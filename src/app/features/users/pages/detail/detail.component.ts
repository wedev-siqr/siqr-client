import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientInfo } from '@models/users';
import { ClientsService } from '@services/clients.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { QrCodeDialogComponent } from '../../dialogs/qr-code-dialog/qr-code-dialog.component';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent implements OnInit {
  client$: Observable<ClientInfo>;

  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private clientsService: ClientsService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.isLoading$.next(true);
    this.client$ = this.route.params.pipe(
      switchMap(({ id }) => this.clientsService.getClientById(id)),
      tap(() => this.isLoading$.next(false))
    );
  }

  onGetQRCode() {
    this.clientsService
      .getQRCode(this.route.snapshot.params.id)
      .pipe(
        switchMap((response: any) =>
          this.dialog
            .open(QrCodeDialogComponent, { data: response })
            .afterClosed()
        )
      )
      .subscribe();
  }
}
