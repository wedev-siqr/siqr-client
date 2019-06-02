import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { ListModule } from './pages/list/list.module';
import { LayoutComponent } from '@components/layout/layout.component';
import { LayoutModule } from '@components/layout/layout.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: {
      links: [
        {
          label: 'Listado de membresías',
          link: '/memberships',
        },
        {
          label: 'Agregar membresía',
          link: '/memberships/create',
        },
      ],
    },
    children: [
      {
        path: '',
        component: ListComponent,
      },
    ],
  },
];

const PAGES_MODULES = [ListModule, LayoutModule];

@NgModule({
  imports: [RouterModule.forChild(routes), PAGES_MODULES],
  exports: [RouterModule],
})
export class MembershipsRoutingModule {}
