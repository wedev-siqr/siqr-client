import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
} from '@angular/core';
import { PaymentFormComponent } from '../../components/payment-form/payment-form.component';

@Component({
  selector: 'new',
  templateUrl: './new.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewComponent implements OnInit {
  @ViewChild(PaymentFormComponent, { static: true }) form: PaymentFormComponent;

  constructor() {}

  ngOnInit() {}

  onSubmit() {}
}