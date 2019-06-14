import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSearchComponent } from './user-search.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserSearchFormModule } from '@components/user-search-form/user-search-form.module';

const MATERIAL_MODULES = [MatCardModule, MatButtonModule];

const COMMON_MODULES = [
  CommonModule,
  MATERIAL_MODULES,
  FlexLayoutModule,
  UserSearchFormModule,
];

const COMMON_DECLARATIONS = [UserSearchComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: [COMMON_MODULES],
  exports: COMMON_DECLARATIONS,
})
export class UserSearchModule {}

export default { COMMON_DECLARATIONS, COMMON_MODULES };
