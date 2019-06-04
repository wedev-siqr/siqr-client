import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { ListModule } from './pages/list/list.module';
import { LayoutModule } from '@components/layout/layout.module';
import { LayoutComponent } from '@components/layout/layout.component';
import { CreateModule } from './pages/create/create.module';
import { CreateComponent } from './pages/create/create.component';

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
        path: '',
        component: ListComponent,
      },
    ],
  },
];

const PAGES_MODULES = [ListModule, LayoutModule, CreateModule];

@NgModule({
  imports: [RouterModule.forChild(routes), PAGES_MODULES],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
