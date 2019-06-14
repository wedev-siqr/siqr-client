import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsListComponent } from './payments-list.component';
import { MatTableModule } from '@angular/material/table';

const MATERIAL_MODULES = [MatTableModule];

const COMMON_MODULES = [CommonModule, MATERIAL_MODULES];

const COMMON_DECLARATIONS = [PaymentsListComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: [COMMON_MODULES],
  exports: COMMON_DECLARATIONS,
})
export class PaymentsListModule {}
