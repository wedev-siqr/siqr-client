import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '@components/layout/layout.module';
import { LayoutComponent } from '@components/layout/layout.component';
import { AccessModule } from './pages/access/access.module';
import { AccessComponent } from './pages/access/access.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: AccessComponent,
      },
    ],
  },
];

const PAGE_MODULES = [LayoutModule, AccessModule];

@NgModule({
  imports: [RouterModule.forChild(routes), PAGE_MODULES],
  exports: [RouterModule],
})
export class QrAccessRoutingModule {}
