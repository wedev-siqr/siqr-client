import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_MODULES = [
  MatSidenavModule,
  MatListModule,
  FlexLayoutModule,
  MatToolbarModule,
  MatButtonModule,
];

const COMMON_MODULES = [MATERIAL_MODULES, CommonModule];

const COMMON_DECLARATION = [LayoutComponent];

@NgModule({
  declarations: COMMON_DECLARATION,
  imports: [COMMON_MODULES, RouterModule],
  exports: COMMON_DECLARATION,
})
export class LayoutModule {}

export default { COMMON_DECLARATION, COMMON_MODULES };
