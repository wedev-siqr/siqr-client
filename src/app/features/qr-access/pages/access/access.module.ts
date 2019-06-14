import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessComponent } from './access.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_MODULES = [
  MatProgressSpinnerModule,
  MatCardModule,
  MatChipsModule,
  MatButtonModule,
];

const COMMON_MODULE = [
  CommonModule,
  FlexLayoutModule,
  NgQrScannerModule,
  MATERIAL_MODULES,
];

const COMMON_DECLARATIONS = [AccessComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: [COMMON_MODULE],
  exports: COMMON_DECLARATIONS,
})
export class AccessModule {}

export default { COMMON_MODULE, COMMON_DECLARATIONS };
