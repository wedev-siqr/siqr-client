import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormBase } from '@mediomelon/ng-core';
import { MatDialog } from '@angular/material/dialog';
import { QrScanDialogComponent } from 'src/app/dialogs/qr-scan-dialog/qr-scan-dialog.component';

@Component({
  selector: 'payment-user-search-form',
  templateUrl: './payment-user-search-form.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentUserSearchFormComponent extends FormBase implements OnInit {
  constructor(formBuilder: FormBuilder, private dialog: MatDialog) {
    super();
    this.form = formBuilder.group({
      code: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onScanCode() {
    this.dialog
      .open(QrScanDialogComponent)
      .afterClosed()
      .subscribe((code) => this.form.patchValue({ code }));
  }
}
