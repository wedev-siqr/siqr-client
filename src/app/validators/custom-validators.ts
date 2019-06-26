import { FormGroup } from '@angular/forms';

export class CustomValidators {
  public static atLeastOne(form: FormGroup) {
    return Object.keys(form.controls).some((key) => !!form.controls[key])
      ? null
      : { atLeastOne: true };
  }
}
