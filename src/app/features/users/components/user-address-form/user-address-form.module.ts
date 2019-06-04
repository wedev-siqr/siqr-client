import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserAddressFormComponent } from './user-address-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

const MATERIAL_MODULES = [MatFormFieldModule, MatInputModule, MatCardModule];

const COMMON_MODULES = [
  CommonModule,
  MATERIAL_MODULES,
  FlexLayoutModule,
  ReactiveFormsModule,
  MatSelectModule,
];

const COMMON_DECLARATIONS = [UserAddressFormComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: [COMMON_MODULES],
  exports: COMMON_DECLARATIONS,
})
export class UserAddressFormModule {}

export default { COMMON_DECLARATIONS, COMMON_MODULES };
