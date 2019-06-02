import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserSearchModule } from '@components/user-search/user-search.module';
import { UserListModule } from '../../components/user-list/user-list.module';
import { ListComponent } from './list.component';

const COMMON_IMPORTS = [
  CommonModule,
  UserSearchModule,
  UserListModule,
  FlexLayoutModule,
];

const COMMON_DECLARATIONS = [ListComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: [COMMON_IMPORTS],
  exports: COMMON_DECLARATIONS,
})
export class ListModule {}

export default { COMMON_DECLARATIONS, COMMON_IMPORTS };
