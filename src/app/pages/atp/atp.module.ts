import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtpRoutingModule } from './atp-routing.module';
import { AtpComponent } from './atp.component';
import { DeleteAtpComponent } from './delete-atp/delete-atp.component';
import { DetailsAtpComponent } from './details-atp/details-atp.component';
import { EditAtpComponent } from './edit-atp/edit-atp.component';


@NgModule({
  declarations: [
    AtpComponent,
    DeleteAtpComponent,
    DetailsAtpComponent,
    EditAtpComponent
  ],
  imports: [
    CommonModule,
    AtpRoutingModule
  ]
})
export class AtpModule { }
