import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuardGuard } from './auth/auth-guard.guard';

const routes: Routes = [
  {
    path: 'auth/login', // Explicit path for login
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'auth/login', // Redirect default route to auth/login
    pathMatch: 'full',
  },
  {
    path: 'auth/register',
    component: RegisterComponent,
  },
  {
    path: 'pages/dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canActivate: [AuthGuardGuard], //-----------
  },
  {
    path: 'pages/veicoli',
    loadChildren: () =>
      import('./pages/veicoli/veicoli.module').then(
        (m) => m.VeicoliModule
      ),
    canActivate: [AuthGuardGuard], //-----
  },
  { 
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
      m => m.DashboardModule
    ) ,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'manutenzioni',
    loadChildren: () =>
      import('./pages/manutenzioni/manutenzioni.module').then(
        m => m.ManutenzioniModule),
        canActivate:[AuthGuardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes, withComponentInputBinding())],
})
export class AppRoutingModule {
 
}
