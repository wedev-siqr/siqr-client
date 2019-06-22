import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { UserFormLayoutModule } from '../../components/user-form-layout/user-form-layout.module';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatSnackBarModule,
  MatProgressBarModule,
];

const COMMON_MODULES = [
  CommonModule,
  UserFormLayoutModule,
  MATERIAL_MODULES,
  RouterModule,
  FlexLayoutModule,
];

const COMMON_DECLARATIONS = [EditComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: [COMMON_MODULES],
  exports: COMMON_DECLARATIONS,
})
export class EditModule {}

export default { COMMON_DECLARATIONS, COMMON_MODULES };
