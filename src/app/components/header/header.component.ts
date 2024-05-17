import { Component } from '@angular/core';
import { Veicoli } from 'src/app/classes/veicoli';
import { VeicoliService } from 'src/app/services/veicoli.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  searchTerm: string = '';

  veicoli: Veicoli[] = [];

  constructor(private svc: VeicoliService, private router: Router) {}

  ngOnInit() {
    //this.svc.getAll().subscribe((data: Veicoli[]) => {
      //this.veicoli = data;
    }
  

  onSearch(text: string): Veicoli[] {
    const term = text.toLowerCase();
    //console.log(text);
     this.veicoli = this.veicoli.filter((veicolo) =>
      (veicolo.tipo_veicolo_nome || '').toLowerCase().startsWith(term)
    );
    console.log('Risultato del filtro:', this.veicoli);
    if (this.veicoli.length > 0) {
      this.router.navigate(['pages/veicoli/table']);
    }
    return this.veicoli;
  }
    
}