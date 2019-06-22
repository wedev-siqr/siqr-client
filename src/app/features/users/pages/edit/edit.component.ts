import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
} from '@angular/core';
import { UserFormLayoutComponent } from '../../components/user-form-layout/user-form-layout.component';
import { switchMap, tap, finalize } from 'rxjs/operators';
import { ClientsService } from '@services/clients.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientInfo } from '@models/users';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Membership } from '@models/memberships';
import { MembershipsService } from '@services/memberships.service';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditComponent implements OnInit {
  @ViewChild(UserFormLayoutComponent, { static: true })
  form: UserFormLayoutComponent;

  client$: Observable<ClientInfo>;

  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  memberships$: Observable<Membership[]>;

  constructor(
    private clientsService: ClientsService,
    private route: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private membershipsService: MembershipsService
  ) {}

  ngOnInit() {
    this.isLoading$.next(true);
    this.memberships$ = this.membershipsService.getMemberships();
    this.client$ = this.route.params.pipe(
      switchMap(({ id }) => this.clientsService.getClientById(id)),
      tap(() => this.isLoading$.next(false))
    );
  }

  onSubmit(value: any) {
    this.isLoading$.next(true);
    this.clientsService
      .updateClient(this.route.snapshot.params.id, value)
      .pipe(finalize(() => this.isLoading$.next(false)))
      .subscribe(
        () => {
          this.snackbar.open('Se Actualizaron los datos del cliente.', 'OK');
          this.router.navigate(['/users']);
        },
        () => this.snackbar.open('Ocurrió un problema actualizando los datos.')
      );
  }
}
