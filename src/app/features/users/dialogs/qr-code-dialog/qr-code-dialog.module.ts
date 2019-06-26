import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrCodeDialogComponent } from './qr-code-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxQRCodeModule } from 'ngx-qrcode2';

const MATERIAL_MODULES = [MatDialogModule, MatButtonModule];

const COMMON_MODULE = [
  CommonModule,
  MATERIAL_MODULES,
  FlexLayoutModule,
  NgxQRCodeModule,
];

const COMMON_DECLARATIONS = [QrCodeDialogComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: [COMMON_MODULE],
  exports: COMMON_DECLARATIONS,
  entryComponents: COMMON_DECLARATIONS,
})
export class QrCodeDialogModule {}
