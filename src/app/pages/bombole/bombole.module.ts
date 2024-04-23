import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BomboleRoutingModule } from './bombole-routing.module';
import { BomboleComponent } from './bombole.component';
import { DeleteBomboleComponent } from './delete-bombole/delete-bombole.component';
import { DetailsBomboleComponent } from './details-bombole/details-bombole.component';
import { EditBomboleComponent } from './edit-bombole/edit-bombole.component';


@NgModule({
  declarations: [
    BomboleComponent,
    DeleteBomboleComponent,
    DetailsBomboleComponent,
    EditBomboleComponent
  ],
  imports: [
    CommonModule,
    BomboleRoutingModule
  ]
})
export class BomboleModule { }
