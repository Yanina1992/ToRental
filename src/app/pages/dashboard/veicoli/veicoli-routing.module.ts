import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeicoliComponent } from './veicoli.component';

const routes: Routes = [{ path: '', component: VeicoliComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeicoliRoutingModule { }
