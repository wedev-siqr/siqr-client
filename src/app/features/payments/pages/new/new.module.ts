import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaymentFormModule } from '../../components/payment-form/payment-form.module';
import { NewComponent } from './new.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { UserSearchModule } from '@components/user-search/user-search.module';
import { PaymentUserInfoFormModule } from '../../components/payment-user-info-form/payment-user-info-form.module';

const MATERIAL_MODULES = [MatCardModule, MatButtonModule];

const COMMON_MODULES = [
  CommonModule,
  PaymentFormModule,
  MATERIAL_MODULES,
  FlexLayoutModule,
  RouterModule,
  UserSearchModule,
  PaymentUserInfoFormModule,
];

const COMMON_DECLARATIONS = [NewComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: [COMMON_MODULES],
  exports: COMMON_DECLARATIONS,
})
export class NewModule {}

export default { COMMON_MODULES, COMMON_DECLARATIONS };
