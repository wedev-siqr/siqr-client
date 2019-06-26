import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import * as Printjs from 'print-js';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'qr-code-dialog',
  templateUrl: './qr-code-dialog.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QrCodeDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<any>
  ) {}

  ngOnInit() {}

  onPrint() {
    Printjs('qrcode', 'html');
  }
}
