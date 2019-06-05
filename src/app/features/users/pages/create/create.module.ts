import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CreateComponent } from './create.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { UserInfoFormModule } from '../../components/user-info-form/user-info-form.module';
import { UserAddressFormModule } from '../../components/user-address-form/user-address-form.module';
import { UserPhotoFormModule } from '../../components/user-photo-form/user-photo-form.module';
import { UserMedicalFormModule } from '../../components/user-medical-form/user-medical-form.module';
import { UserFormLayoutModule } from '../../components/user-form-layout/user-form-layout.module';

const MATERIAL_MODULES = [MatButtonModule];

const COMMON_IMPORTS = [
  CommonModule,
  FlexLayoutModule,
  MATERIAL_MODULES,
  UserFormLayoutModule,
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
