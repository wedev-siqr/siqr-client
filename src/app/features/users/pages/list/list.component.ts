import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ClientsFilterPayload, ClientInfo } from '@models/users';
import { ClientsService } from '@services/clients.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserDialogComponent } from '../../dialogs/delete-user-dialog/delete-user-dialog.component';
import { filter, switchMap, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  clients$: Observable<ClientInfo[]>;

  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private clientsSevice: ClientsService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.onGetClients();
  }

  private onGetClients(filters?: any) {
    this.isLoading$.next(true);
    this.clients$ = this.clientsSevice
      .getClients(filters)
      .pipe(tap(() => this.isLoading$.next(false)));
  }

  onSearch(filter: ClientsFilterPayload) {
    this.onGetClients(filter);
  }

  onDelete(clientId: number) {
    this.dialog
      .open(DeleteUserDialogComponent, {
        disableClose: true,
      })
      .afterClosed()
      .pipe(
        filter(Boolean),
        tap(() => this.isLoading$.next(true)),
        switchMap(() => this.clientsSevice.deleteClient(clientId))
      )
      .subscribe(
        () => {
          this.snackbar.open('Se ha eliminado al cliente.', 'OK');
          this.onGetClients();
        },
        () => {
          this.snackbar.open(
            'Ha ocurrido un error al eliminar el cliente. Intente de nuevo.',
            'OK'
          );
          this.isLoading$.next(false);
        }
      );
  }
}
