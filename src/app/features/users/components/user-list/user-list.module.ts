import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

const MATERIAL_MODULES = [MatButtonModule, MatTableModule, FlexLayoutModule];

const COMMON_IMPORTS = [CommonModule, MATERIAL_MODULES, RouterModule];

const COMMON_DECLARATIONS = [UserListComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: [COMMON_IMPORTS],
  exports: COMMON_DECLARATIONS,
})
export class UserListModule {}

export default { COMMON_DECLARATIONS, COMMON_IMPORTS };
