import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembershipFormComponent } from './membership-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

const MATERIAL_MODULES = [
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  FlexLayoutModule,
];

const COMMON_MODULES = [MATERIAL_MODULES, CommonModule, ReactiveFormsModule];

const COMMON_DECLARATIONS = [MembershipFormComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: [COMMON_MODULES],
  exports: COMMON_DECLARATIONS,
})
export class MembershipFormModule {}

export default { COMMON_DECLARATIONS, COMMON_MODULES };
