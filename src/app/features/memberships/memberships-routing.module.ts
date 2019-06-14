import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { ListModule } from './pages/list/list.module';
import { LayoutComponent } from '@components/layout/layout.component';
import { LayoutModule } from '@components/layout/layout.module';
import { CreateModule } from './pages/create/create.module';
import { CreateComponent } from './pages/create/create.component';
import { EditModule } from './pages/edit/edit.module';
import { EditComponent } from './pages/edit/edit.component';

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
        path: 'create',
        component: CreateComponent,
      },
      {
        path: ':id/edit',
        component: EditComponent,
      },
      {
        path: '',
        component: ListComponent,
      },
    ],
  },
];

const PAGES_MODULES = [ListModule, LayoutModule, CreateModule, EditModule];

@NgModule({
  imports: [RouterModule.forChild(routes), PAGES_MODULES],
  exports: [RouterModule],
})
export class MembershipsRoutingModule {}
