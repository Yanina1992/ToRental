import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagliandiComponent } from './tagliandi.component';

const routes: Routes = 
[
  /*{
    path: 'details/:id',
    component: DetailsComponent,
  },
  {
    path: 'edit/:id',
    component: EditComponent,
  },
  {
    path: 'delete/:id',
    component: DeleteComponent,
  },*/
  { path: '',
    component: TagliandiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagliandiRoutingModule { }
