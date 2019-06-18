import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MembershipFormModule } from '../../components/membership-form/membership-form.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatCardModule,
  MatProgressBarModule,
  MatSnackBarModule,
];

const COMMON_MODULES = [
  CommonModule,
  MATERIAL_MODULES,
  MembershipFormModule,
  FlexLayoutModule,
  RouterModule,
];

const COMMON_DECLARATIONS = [CreateComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: [COMMON_MODULES],
  exports: COMMON_DECLARATIONS,
})
export class CreateModule {}

export default { COMMON_DECLARATIONS, COMMON_MODULES };
