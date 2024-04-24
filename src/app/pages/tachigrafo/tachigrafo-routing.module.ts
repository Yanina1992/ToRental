import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TachigrafoComponent } from './tachigrafo.component';

const routes: Routes = [{ path: '', component: TachigrafoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TachigrafoRoutingModule { }
