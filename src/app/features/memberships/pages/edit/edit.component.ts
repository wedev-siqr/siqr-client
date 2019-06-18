import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Membership } from '@models/memberships';
import { MembershipsService } from '@services/memberships.service';
import { Observable } from 'rxjs';
import { MembershipFormComponent } from '../../components/membership-form/membership-form.component';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditComponent implements OnInit {
  @ViewChild(MembershipFormComponent, { static: true })
  form: MembershipFormComponent;

  membership$: Observable<Membership>;
  membershipId$: Observable<number>;

  constructor(
    private route: ActivatedRoute,
    private membershipsService: MembershipsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.membershipId$ = this.route.params.pipe(map(({ id }) => id));
    this.membership$ = this.membershipId$.pipe(
      switchMap((id) => this.membershipsService.getMembershipById(id))
    );
  }

  onSubmit(m: Membership) {
    this.membershipId$
      .pipe(switchMap((id) => this.membershipsService.updateMembership(id, m)))
      .subscribe(() => {
        this.router.navigate(['/memberships']);
      });
  }
}
