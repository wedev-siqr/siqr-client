import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteUserDialogComponent } from './delete-user-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';

const MATERIAL_MODULES = [MatButtonModule, MatDialogModule];

const COMMON_MODULES = [MATERIAL_MODULES, CommonModule, FlexLayoutModule];

const COMMON_DECLARATIONS = [DeleteUserDialogComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: [COMMON_MODULES],
  exports: COMMON_DECLARATIONS,
  entryComponents: COMMON_DECLARATIONS,
})
export class DeleteUserDialogModule {}
