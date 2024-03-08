import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VeicoliComponent } from './pages/veicoli/veicoli.component';
import { AddComponent } from './pages/veicoli/add/add.component';
import { ListaVeicoliComponent } from './pages/veicoli/lista-veicoli/lista-veicoli.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: "pages/home",
    component: HomeComponent,
  },
  {
    path: "pages/veicoli",
    component: VeicoliComponent
  },
  {
  path: "pages/veicoli/add",
  component: AddComponent
  },
  {
    path: "pages/veicoli/lista-veicoli",
    component: ListaVeicoliComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes, withComponentInputBinding())],
})
export class AppRoutingModule { }
