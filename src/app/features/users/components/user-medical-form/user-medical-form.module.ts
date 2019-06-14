import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMedicalFormComponent } from './user-medical-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatSelectModule,
];

const COMMON_MOULES = [
  CommonModule,
  MATERIAL_MODULES,
  FlexLayoutModule,
  ReactiveFormsModule,
];

const COMMON_DECLARATIONS = [UserMedicalFormComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: [COMMON_MOULES],
  exports: COMMON_DECLARATIONS,
})
export class UserMedicalFormModule {}

export default { COMMON_DECLARATIONS, COMMON_MOULES };
