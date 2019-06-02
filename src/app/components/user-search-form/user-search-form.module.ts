import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserSearchFormComponent } from './user-search-form.component';

const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
];

const COMMON_IMPORTS = [
  CommonModule,
  MATERIAL_MODULES,
  FlexLayoutModule,
  ReactiveFormsModule,
];

const COMMON_DECLARATIONS = [UserSearchFormComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: [COMMON_IMPORTS],
  exports: COMMON_DECLARATIONS,
})
export class UserSearchFormModule {}

export default { COMMON_DECLARATIONS, COMMON_IMPORTS };
