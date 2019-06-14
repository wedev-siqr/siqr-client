import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'memberships',
    loadChildren: './features/memberships/memberships.module#MembershipsModule',
  },
  {
    path: 'users',
    loadChildren: './features/users/users.module#UsersModule',
  },
  {
    path: 'payments',
    loadChildren: './features/payments/payments.module#PaymentsModule',
  },
  {
    path: 'qr-access',
    loadChildren: './features/qr-access/qr-access.module#QrAccessModule',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
