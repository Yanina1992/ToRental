import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VeicoliComponent } from './pages/veicoli/veicoli.component';

const routes: Routes = [
  {
    path: "pages/home",
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: "pages/veicoli",
    component: VeicoliComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes, withComponentInputBinding())],
})
export class AppRoutingModule { }
