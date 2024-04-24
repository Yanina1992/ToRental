import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagliandoComponent } from './tagliando.component';

const routes: Routes = [{ path: '', component: TagliandoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagliandoRoutingModule { }
