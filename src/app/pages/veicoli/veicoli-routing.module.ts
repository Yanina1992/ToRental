import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeicoliComponent } from './veicoli.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [

{
  path: 'edit/:id',
  component: EditComponent,
},
{
  path: 'delete/:id',
  component: DeleteComponent,
},
{
  path: 'table',
  component: TableComponent,
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
