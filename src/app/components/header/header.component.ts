import { Component } from '@angular/core';
import { VeicoliService } from 'src/app/services/veicoli.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

constructor(private svc:VeicoliService){}



}
