import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '@components/layout/layout.module';
import { LayoutComponent } from '@components/layout/layout.component';
import { ListModule } from './pages/list/list.module';
import { ListComponent } from './pages/list/list.component';
import { NewModule } from './pages/new/new.module';
import { NewComponent } from './pages/new/new.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: {
      links: [
        {
          label: 'Historial de pagos',
          link: '/payments',
        },
        {
          label: 'Registro de pago',
          link: '/payments/new',
        },
      ],
    },
    children: [
      {
        path: 'new',
        component: NewComponent,
      },
      {
        path: '',
        component: ListComponent,
      },
    ],
  },
];

const PAGES_MODULES = [LayoutModule, ListModule, NewModule];

@NgModule({
  imports: [RouterModule.forChild(routes), PAGES_MODULES],
  exports: [RouterModule],
})
export class PaymentsRoutingModule {}
