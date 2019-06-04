import { AfterViewInit, Input } from '@angular/core';
import { FormBase } from '@mediomelon/ng-core';

export class DisableForm<T = any> extends FormBase<T> implements AfterViewInit {
  @Input() isDisabled: boolean;

  ngAfterViewInit() {
    if (this.isDisabled) this.form.disable();
  }

  getFormValue() {
    return this.form.getRawValue();
  }
}
