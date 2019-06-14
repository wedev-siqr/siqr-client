import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { PaymentsListModule } from '../../components/payments-list/payments-list.module';
import { UserSearchModule } from '@components/user-search/user-search.module';
import { FlexLayoutModule } from '@angular/flex-layout';

const COMMON_MODULES = [
  CommonModule,
  PaymentsListModule,
  UserSearchModule,
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
