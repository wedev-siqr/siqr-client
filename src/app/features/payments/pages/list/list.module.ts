import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PaymentUserSearchFormModule } from '../../components/payment-user-search-form/payment-user-search-form.module';
import { PaymentsListModule } from '../../components/payments-list/payments-list.module';
import { ListComponent } from './list.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const MATERIAL_MODULES = [MatCardModule, MatProgressBarModule];

const COMMON_MODULES = [
  MATERIAL_MODULES,
  CommonModule,
  PaymentsListModule,
  PaymentUserSearchFormModule,
  FlexLayoutModule,
];

const COMMON_DECLARATIONS = [ListComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: [COMMON_MODULES],
  exports: COMMON_DECLARATIONS,
})
export class ListModule {}

export default { COMMON_MODULES, COMMON_DECLARATIONS };
