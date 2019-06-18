import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Membership } from '@models/memberships';
import { MembershipsService } from '@services/memberships.service';
import { MembershipFormComponent } from '../../components/membership-form/membership-form.component';
import { Observable, Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateComponent implements OnInit {
  @ViewChild(MembershipFormComponent, { static: true })
  form: MembershipFormComponent;

  isLoading$: Subject<boolean>;

  constructor(
    private membershipsService: MembershipsService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {
    this.isLoading$ = new Subject();
  }

  ngOnInit() {}

  onSubmit(payload: Membership) {
    this.isLoading$.next(true);
    this.membershipsService
      .createMembership(payload)
      .pipe(finalize(() => this.isLoading$.next(false)))
      .subscribe(
        () => {
          this.snackbar.open('Se ha creado la membresía.');
          this.router.navigate(['/memberships']);
        },
        () =>
          this.snackbar.open(
            'Ha ocurrido un problema creando la membresía. Intente de nuevo.'
          )
      );
  }
}
