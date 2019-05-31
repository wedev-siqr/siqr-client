import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListModule } from './pages/list/list.module';
import { ListComponent } from './pages/list/list.component';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { LayoutComponent } from 'src/app/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
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
    component: LayoutComponent,
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
