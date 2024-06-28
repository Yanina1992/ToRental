import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ManutenzioniComponent } from './manutenzioni.component';
import { ManutenzioniEditComponent } from './manutenzioni-edit/manutenzioni-edit.component';
import { ManutenzioniDeleteComponent } from './manutenzioni-delete/manutenzioni-delete.component';
import { ManutenzioniTableComponent } from './manutenzioni-table/manutenzioni-table.component';
import { CreateManutenzioneComponent } from './create-manutenzione/create-manutenzione.component';
import { StoricoComponent } from './storico/storico.component';

const routes: Routes = 
[
  {
    path: '',
    component:ManutenzioniComponent,
  },
  {
    path: ':tipo',
    component: ManutenzioniTableComponent,
  },
  {
    path: ':tipo/storico',
    component: StoricoComponent
  },
  {
    path: ':tipo/manutenzioni-edit/:id',
    component: ManutenzioniEditComponent
  },
  {
    path: ':tipo/manutenzioni-delete/:id',
    component: ManutenzioniDeleteComponent
  },
  {
    path: ':tipo/create-manutenzione',
    component: CreateManutenzioneComponent
    //path: 'manutenzione/:tipo',
    //component: CreateManutenzioneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManutenzioniRoutingModule {
  constructor(router: Router) {
    const replacer = (key: any, value: { name: any; }) => (typeof value === 'function') ? value.name : value;
  }
}
