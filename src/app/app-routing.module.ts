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
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'auth/login',
    component: LoginComponent,
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
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'pages/veicoli',
    loadChildren: () =>
      import('./pages/dashboard/veicoli/veicoli.module').then(
        (m) => m.VeicoliModule
      ),
    canActivate: [AuthGuardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes, withComponentInputBinding())],
})
export class AppRoutingModule {
  constructor() {
    console.log('AppRoutingModule loaded'); 
  }
}
