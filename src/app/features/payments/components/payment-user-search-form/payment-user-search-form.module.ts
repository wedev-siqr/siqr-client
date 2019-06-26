import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentUserSearchFormComponent } from './payment-user-search-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { QrScanDialogModule } from 'src/app/dialogs/qr-scan-dialog/qr-scan-dialog.module';

const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
];

const COMMON_MODULES = [
  CommonModule,
  MATERIAL_MODULES,
  FlexLayoutModule,
  ReactiveFormsModule,
  QrScanDialogModule,
];

const COMMON_DECLARATIONS = [PaymentUserSearchFormComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: [COMMON_MODULES],
  exports: COMMON_DECLARATIONS,
})
export class PaymentUserSearchFormModule {}
