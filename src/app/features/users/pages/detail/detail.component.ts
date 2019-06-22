import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientInfo } from '@models/users';
import { ClientsService } from '@services/clients.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

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
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isLoading$.next(true);
    this.client$ = this.route.params.pipe(
      switchMap(({ id }) => this.clientsService.getClientById(id)),
      tap(() => this.isLoading$.next(false))
    );
  }
}
