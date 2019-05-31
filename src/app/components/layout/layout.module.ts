import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';

const MATERIAL_MODULES = [MatSidenavModule, MatListModule, FlexLayoutModule];

const COMMON_MODULES = [MATERIAL_MODULES, CommonModule];

const COMMON_DECLARATION = [LayoutComponent];

@NgModule({
  declarations: COMMON_DECLARATION,
  imports: [COMMON_MODULES, RouterModule],
  exports: COMMON_DECLARATION,
})
export class LayoutModule {}

export default { COMMON_DECLARATION, COMMON_MODULES };
