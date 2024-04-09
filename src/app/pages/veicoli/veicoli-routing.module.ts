import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeicoliComponent } from './veicoli.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  
{
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
},
{ path: '',
  component: VeicoliComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeicoliRoutingModule { 

}
