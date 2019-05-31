import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'memberships',
    loadChildren: './features/memberships/memberships.module#MembershipsModule',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'memberships',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
