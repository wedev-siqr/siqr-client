import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const MATERIAL_MODULES = [
  MatTableModule,
  MatButtonModule,
  FlexLayoutModule,
  MatProgressBarModule,
  MatSnackBarModule,
];

const COMMON_MODULES = [MATERIAL_MODULES, CommonModule, RouterModule];

const COMMON_DECLARATIONS = [ListComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: [COMMON_MODULES],
  exports: COMMON_DECLARATIONS,
})
export class ListModule {}

export default { COMMON_DECLARATIONS, COMMON_MODULES };
