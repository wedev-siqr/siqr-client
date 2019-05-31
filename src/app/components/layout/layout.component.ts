import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  links$: Observable<any[]>;

  constructor(private activatedRoute: ActivatedRoute) {
    this.links$ = this.activatedRoute.data.pipe(map((data) => data.links));
  }

  ngOnInit() {}
}
