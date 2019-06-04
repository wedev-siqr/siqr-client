import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMembershipFormComponent } from './create-membership-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

const MATERIAL_MODULES = [MatFormFieldModule, MatInputModule, MatSelectModule];

const COMMON_MODULES = [
  CommonModule,
  MATERIAL_MODULES,
  FlexLayoutModule,
  ReactiveFormsModule,
];

const COMMON_DECLARATIONS = [CreateMembershipFormComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: [COMMON_MODULES],
  exports: COMMON_DECLARATIONS,
})
export class CreateMembershipFormModule {}

export default { COMMON_DECLARATIONS, COMMON_MODULES };
