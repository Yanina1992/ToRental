import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';
import { VeicoliComponent } from './pages/veicoli/veicoli.component';
import { AddComponent } from './pages/veicoli/add/add.component';
import { ListaVeicoliComponent } from './pages/veicoli/lista-veicoli/lista-veicoli.component';
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
    path: 'pages/veicoli',
    component: VeicoliComponent,
  },
  {
    path: 'pages/veicoli/add',
    component: AddComponent,
  },
  {
    path: 'pages/veicoli/lista-veicoli',
    component: ListaVeicoliComponent,
  },
  { path: 'pages/dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuardGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes, withComponentInputBinding())],
})
export class AppRoutingModule {}
