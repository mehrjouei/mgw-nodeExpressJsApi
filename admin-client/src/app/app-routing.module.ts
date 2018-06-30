import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule'
  },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})

// export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
export class AppRoutingModule { }
