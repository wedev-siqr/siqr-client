import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Membership } from '@models/memberships';
import { MembershipsService } from '@services/memberships.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { UserFormLayoutComponent } from '../../components/user-form-layout/user-form-layout.component';
import { ClientsService } from '@services/clients.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize, switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { QrCodeDialogComponent } from '../../dialogs/qr-code-dialog/qr-code-dialog.component';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateComponent implements OnInit {
  @ViewChild(UserFormLayoutComponent, { static: true })
  form: UserFormLayoutComponent;

  memberships$: Observable<Membership[]>;

  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private membershipsService: MembershipsService,
    private clientsService: ClientsService,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.memberships$ = this.membershipsService.getMemberships();
  }

  onSubmit(value: any) {
    this.isLoading$.next(true);
    this.clientsService
      .createClient(value)
      .pipe(
        switchMap((response: any) =>
          this.dialog
            .open(QrCodeDialogComponent, {
              disableClose: true,
              data: {
                code: response.code,
                name: `${value.info.name} ${value.info.firstSurname} ${
                  value.info.secondSurname
                }`,
              },
            })
            .afterClosed()
        ),
        finalize(() => this.isLoading$.next(false))
      )
      .subscribe(
        () => {
          this.snackbar.open('Se ha registrado al cliente.', 'OK');
          this.router.navigate(['/users']);
        },
        () => this.snackbar.open('Ocurrió un error creando al cliente.')
      );
  }
}
