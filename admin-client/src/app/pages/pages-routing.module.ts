import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { AuthGuard } from '../services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', canActivate: [AuthGuard], loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'members', canActivate: [AuthGuard], loadChildren: './users/users.module#UsersModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
