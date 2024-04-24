import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RevisioneComponent } from './revisione.component';

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
    component: RevisioneComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevisioneRoutingModule { }
