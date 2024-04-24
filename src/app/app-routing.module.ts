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
  { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'pages/assicurazioni', loadChildren: () => import('./pages/assicurazioni/assicurazioni.module').then(m => m.AssicurazioniModule) },
  { path: 'pages/atp', loadChildren: () => import('./pages/atp/atp.module').then(m => m.AtpModule) },
  { path: 'pages/bolli', loadChildren: () => import('./pages/bolli/bolli.module').then(m => m.BolliModule) },
  { path: 'pages/bombole', loadChildren: () => import('./pages/bombole/bombole.module').then(m => m.BomboleModule) },
  { path: 'revisione', loadChildren: () => import('./pages/revisione/revisione.module').then(m => m.RevisioneModule) },
  { path: 'tachigrafo', loadChildren: () => import('./pages/tachigrafo/tachigrafo.module').then(m => m.TachigrafoModule) },
  { path: 'tagliando', loadChildren: () => import('./pages/tagliando/tagliando.module').then(m => m.TagliandoModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes, withComponentInputBinding())],
})
export class AppRoutingModule {
 
}
