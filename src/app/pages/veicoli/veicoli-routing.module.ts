import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeicoliComponent } from './veicoli.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { TableComponent } from './table/table.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
{
  path: '',
  component: VeicoliComponent,
},
{ path: 'table',
  component: TableComponent
},
{ path: 'create',
  component: CreateComponent,
},
{
  path: 'edit/:id',
  component: EditComponent,
},
{
  path: 'delete/:id',
  component: DeleteComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeicoliRoutingModule { 

}
