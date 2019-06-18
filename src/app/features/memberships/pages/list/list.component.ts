import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MembershipsService } from '@services/memberships.service';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { Membership } from '@models/memberships';
import { switchMap, tap, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  memberships$: Observable<Membership[]>;
  isLoading$: BehaviorSubject<boolean>;

  displayedColumns = ['name', 'price', 'duration', 'timeUnit', 'actions'];

  constructor(
    private membershipsService: MembershipsService,
    private snackbar: MatSnackBar
  ) {
    this.isLoading$ = new BehaviorSubject(true);
  }

  ngOnInit() {
    this.memberships$ = this.membershipsService
      .getMemberships()
      .pipe(tap(() => this.isLoading$.next(false)));
  }

  onDelete(membershipId: number) {
    this.isLoading$.next(true);
    this.memberships$ = this.membershipsService
      .deleteMembership(membershipId)
      .pipe(
        tap(() => this.isLoading$.next(false)),
        catchError(() => {
          this.snackbar.open('Hubo un error borrando la membresía.');
          return this.memberships$;
        }),
        switchMap(() => this.membershipsService.getMemberships()),
        tap(() => this.snackbar.open('Se ha borrado la membresía.'))
      );
  }
}
