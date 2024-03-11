import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VeicoliComponent } from './pages/veicoli/veicoli.component';
import { AddComponent } from './pages/veicoli/add/add.component';
import { ListaVeicoliComponent } from './pages/veicoli/lista-veicoli/lista-veicoli.component';
import { RevisioniComponent } from './pages/home/revisioni/revisioni.component';
import { TagliandiComponent } from './pages/home/tagliandi/tagliandi.component';
import { ContravvenzioniComponent } from './pages/home/contravvenzioni/contravvenzioni.component';
import { AssicurazioniComponent } from './pages/home/assicurazioni/assicurazioni.component';
import { BolliComponent } from './pages/home/bolli/bolli.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

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
    path: 'pages/home',
    component: HomeComponent,
  },
  {
    path: 'pages/home/revisioni',
    component: RevisioniComponent,
  },
  {
    path: 'pages/home/tagliandi',
    component: TagliandiComponent,
  },
  {
    path: 'pages/home/contravvenzioni',
    component: ContravvenzioniComponent,
  },
  {
    path: 'pages/home/assicurazioni',
    component: AssicurazioniComponent,
  },
  {
    path: 'pages/home/bolli',
    component: BolliComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes, withComponentInputBinding())],
})
export class AppRoutingModule {}
