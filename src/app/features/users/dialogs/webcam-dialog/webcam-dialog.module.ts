import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebcamDialogComponent } from './webcam-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { WebcamModule } from 'ngx-webcam';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

const MATERIAL_MODULES = [MatDialogModule, MatButtonModule];

const COMMON_MODULES = [
  CommonModule,
  MATERIAL_MODULES,
  WebcamModule,
  FlexLayoutModule,
];

const COMMON_DECLARATIONS = [WebcamDialogComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: [COMMON_MODULES],
  exports: COMMON_DECLARATIONS,
  entryComponents: COMMON_DECLARATIONS,
})
export class WebcamDialogModule {}

export default { COMMON_DECLARATIONS, COMMON_MODULES };
