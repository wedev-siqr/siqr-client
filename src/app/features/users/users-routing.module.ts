import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { ListModule } from './pages/list/list.module';
import { LayoutModule } from '@components/layout/layout.module';
import { LayoutComponent } from '@components/layout/layout.component';
import { CreateModule } from './pages/create/create.module';
import { CreateComponent } from './pages/create/create.component';
import { DetailModule } from './pages/detail/detail.module';
import { DetailComponent } from './pages/detail/detail.component';
import { EditModule } from './pages/edit/edit.module';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: {
      links: [
        {
          label: 'Buscar usuario',
          link: '/users',
        },
        {
          label: 'Registrar usuario',
          link: '/users/create',
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
        path: ':id',
        component: DetailComponent,
      },
      {
        path: '',
        component: ListComponent,
      },
    ],
  },
];

const PAGES_MODULES = [
  ListModule,
  LayoutModule,
  CreateModule,
  DetailModule,
  EditModule,
];

@NgModule({
  imports: [RouterModule.forChild(routes), PAGES_MODULES],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
