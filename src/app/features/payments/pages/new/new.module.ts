import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { PaymentFormModule } from '../../components/payment-form/payment-form.module';
import { PaymentUserInfoFormModule } from '../../components/payment-user-info-form/payment-user-info-form.module';
import { NewComponent } from './new.component';
import { PaymentUserSearchFormModule } from '../../components/payment-user-search-form/payment-user-search-form.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const MATERIAL_MODULES = [
  MatCardModule,
  MatButtonModule,
  MatProgressBarModule,
  MatSnackBarModule,
];

const COMMON_MODULES = [
  CommonModule,
  PaymentFormModule,
  MATERIAL_MODULES,
  FlexLayoutModule,
  RouterModule,
  PaymentUserInfoFormModule,
  PaymentUserSearchFormModule,
];

const COMMON_DECLARATIONS = [NewComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: [COMMON_MODULES],
  exports: COMMON_DECLARATIONS,
})
export class NewModule {}

export default { COMMON_MODULES, COMMON_DECLARATIONS };
