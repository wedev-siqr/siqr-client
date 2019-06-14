import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MembershipFormModule } from '../../components/membership-form/membership-form.module';
import { RouterModule } from '@angular/router';

const MATERIAL_MODULES = [MatButtonModule, MatCardModule];

const COMMON_MODULES = [
  CommonModule,
  MATERIAL_MODULES,
  FlexLayoutModule,
  MembershipFormModule,
  RouterModule,
];

const COMMON_DECLARATIONS = [EditComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: [COMMON_MODULES],
  exports: COMMON_DECLARATIONS,
})
export class EditModule {}

export default { COMMON_MODULES, COMMON_DECLARATIONS };
