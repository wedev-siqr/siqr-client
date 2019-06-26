import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormBase } from '@mediomelon/ng-core';
import { NAME_REGEX, CURP_REGEX } from '@constants';
import { ClientsFilterPayload } from '@models/users';
import { QrScanDialogComponent } from 'src/app/dialogs/qr-scan-dialog/qr-scan-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'user-search-form',
  templateUrl: './user-search-form.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSearchFormComponent extends FormBase<
  Partial<ClientsFilterPayload>
> {
  constructor(formBuilder: FormBuilder, private dialog: MatDialog) {
    super();
    this.form = formBuilder.group({
      code: '',
      name: ['', Validators.pattern(NAME_REGEX)],
      firstSurname: ['', Validators.pattern(NAME_REGEX)],
      secondSurname: ['', Validators.pattern(NAME_REGEX)],
      curp: ['', Validators.pattern(CURP_REGEX)],
    });
  }

  onScan() {
    this.dialog
      .open(QrScanDialogComponent)
      .afterClosed()
      .subscribe((code) => this.form.patchValue({ code }));
  }

  reset() {
    super.reset();
    this.submit();
  }
}
