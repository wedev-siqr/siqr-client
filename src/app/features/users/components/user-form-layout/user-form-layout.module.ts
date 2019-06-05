import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormLayoutComponent } from './user-form-layout.component';
import { UserAddressFormModule } from '../user-address-form/user-address-form.module';
import { UserPhotoFormModule } from '../user-photo-form/user-photo-form.module';
import { UserInfoFormModule } from '../user-info-form/user-info-form.module';
import { UserMedicalFormModule } from '../user-medical-form/user-medical-form.module';
import { FlexLayoutModule } from '@angular/flex-layout';

const COMMON_MODULES = [
  CommonModule,
  UserAddressFormModule,
  UserPhotoFormModule,
  UserInfoFormModule,
  UserMedicalFormModule,
  FlexLayoutModule,
];

const COMMON_DECLARATIONS = [UserFormLayoutComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: [COMMON_MODULES],
  exports: COMMON_DECLARATIONS,
})
export class UserFormLayoutModule {}

export default { COMMON_DECLARATIONS, COMMON_MODULES };
