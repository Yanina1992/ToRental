import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssicurazioniComponent } from './assicurazioni.component';

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
    component: AssicurazioniComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssicurazioniRoutingModule { }
