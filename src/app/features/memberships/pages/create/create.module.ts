import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CreateMembershipFormModule } from '../../components/create-membership-form/create-membership-form.module';
import { CreateComponent } from './create.component';

const MATERIAL_MODULES = [MatButtonModule, MatCardModule];

const COMMON_MODULES = [
  CommonModule,
  MATERIAL_MODULES,
  FlexLayoutModule,
  CreateMembershipFormModule,
];

const COMMON_DECLARATIONS = [CreateComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: [COMMON_MODULES],
  exports: COMMON_DECLARATIONS,
})
export class CreateModule {}

export default { COMMON_DECLARATIONS, COMMON_MODULES };
