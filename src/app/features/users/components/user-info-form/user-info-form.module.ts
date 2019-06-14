import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoFormComponent } from './user-info-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatSelectModule,
  MatCardModule,
];

const COMMON_IMPORTS = [
  CommonModule,
  MATERIAL_MODULES,
  FlexLayoutModule,
  ReactiveFormsModule,
];

const COMMON_DECLARATIONS = [UserInfoFormComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: [COMMON_IMPORTS],
  exports: COMMON_DECLARATIONS,
})
export class UserInfoFormModule {}

export default { COMMON_DECLARATIONS, COMMON_IMPORTS };
