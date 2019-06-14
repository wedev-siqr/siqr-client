import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  links$: Observable<any[]>;
  hasLinks$: Observable<boolean>;

  constructor(private activatedRoute: ActivatedRoute) {
    this.links$ = this.activatedRoute.data.pipe(map((data) => data.links));
    this.hasLinks$ = this.links$.pipe(map((links) => !!links));
  }

  ngOnInit() {}
}
