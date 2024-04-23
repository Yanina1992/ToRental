import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevisioniRoutingModule } from './revisioni-routing.module';
import { RevisioniComponent } from './revisioni.component';
import { DeleteRevisioniComponent } from './delete-revisioni/delete-revisioni.component';
import { DetailsRevisioniComponent } from './details-revisioni/details-revisioni.component';
import { EditRevisioniComponent } from './edit-revisioni/edit-revisioni.component';


@NgModule({
  declarations: [
    RevisioniComponent,
    DeleteRevisioniComponent,
    DetailsRevisioniComponent,
    EditRevisioniComponent,
  ],
  imports: [
    CommonModule,
    RevisioniRoutingModule
  ]
})
export class RevisioniModule { }
