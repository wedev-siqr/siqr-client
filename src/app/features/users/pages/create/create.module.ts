import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { UserFormLayoutModule } from '../../components/user-form-layout/user-form-layout.module';
import { CreateComponent } from './create.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatSnackBarModule,
  MatProgressBarModule,
];

const COMMON_IMPORTS = [
  CommonModule,
  FlexLayoutModule,
  MATERIAL_MODULES,
  UserFormLayoutModule,
  RouterModule,
];

const COMMON_DECLARATIONS = [CreateComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: [COMMON_IMPORTS],
  exports: COMMON_DECLARATIONS,
  schemas: [NO_ERRORS_SCHEMA],
})
export class CreateModule {}

export default { COMMON_DECLARATIONS, COMMON_IMPORTS };
