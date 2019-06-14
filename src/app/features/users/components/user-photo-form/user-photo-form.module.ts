import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPhotoFormComponent } from './user-photo-form.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { WebcamDialogModule } from '../../dialogs/webcam-dialog/webcam-dialog.module';

const MATERIAL_MODULES = [MatCardModule, MatButtonModule, MatDialogModule];

const COMMON_IMPORTS = [
  CommonModule,
  MATERIAL_MODULES,
  ReactiveFormsModule,
  FlexLayoutModule,
  WebcamDialogModule,
];

const COMMON_DECLARATIONS = [UserPhotoFormComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: [COMMON_IMPORTS],
  exports: COMMON_DECLARATIONS,
})
export class UserPhotoFormModule {}

export default { COMMON_DECLARATIONS, COMMON_IMPORTS };
