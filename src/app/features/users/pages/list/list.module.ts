import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { UserSearchModule } from '@components/user-search/user-search.module';
import { UserListModule } from '../../components/user-list/user-list.module';
import { DeleteUserDialogModule } from '../../dialogs/delete-user-dialog/delete-user-dialog.module';
import { ListComponent } from './list.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const COMMON_IMPORTS = [
  CommonModule,
  UserSearchModule,
  UserListModule,
  FlexLayoutModule,
  MatDialogModule,
  DeleteUserDialogModule,
  MatSnackBarModule,
  MatProgressBarModule,
];

const COMMON_DECLARATIONS = [ListComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: [COMMON_IMPORTS],
  exports: COMMON_DECLARATIONS,
})
export class ListModule {}

export default { COMMON_DECLARATIONS, COMMON_IMPORTS };
