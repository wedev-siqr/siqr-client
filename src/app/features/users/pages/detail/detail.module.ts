import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { UserFormLayoutModule } from '../../components/user-form-layout/user-form-layout.module';
import { DetailComponent } from './detail.component';
import { RouterModule } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { QrCodeDialogModule } from '../../dialogs/qr-code-dialog/qr-code-dialog.module';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatProgressBarModule,
  MatDialogModule,
];

const COMMON_MODULES = [
  CommonModule,
  MATERIAL_MODULES,
  FlexLayoutModule,
  UserFormLayoutModule,
  RouterModule,
  QrCodeDialogModule,
];

const COMMON_DECLARATIONS = [DetailComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: [COMMON_MODULES],
  exports: COMMON_DECLARATIONS,
})
export class DetailModule {}

export default { COMMON_DECLARATIONS, COMMON_MODULES };
