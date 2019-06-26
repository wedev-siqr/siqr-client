import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrScanDialogComponent } from './qr-scan-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgQrScannerModule } from 'angular2-qrscanner';

const COMMON_DECLARATIONS = [QrScanDialogComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: [CommonModule, MatDialogModule, NgQrScannerModule],
  exports: COMMON_DECLARATIONS,
  entryComponents: COMMON_DECLARATIONS,
})
export class QrScanDialogModule {}
