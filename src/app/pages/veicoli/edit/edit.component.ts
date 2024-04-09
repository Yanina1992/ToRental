import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Veicoli } from 'src/app/classes/veicoli';
import { VeicoliService } from 'src/app/services/veicoli.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  veicolo:Veicoli = new Veicoli();

  constructor(
    private veicoliSvc: VeicoliService,
    private route: ActivatedRoute
  ){}
  
  ngOnInit(){
    this.route.params.subscribe((params:any)=> {
      this.veicoliSvc.getById(params.id).subscribe(res => {
        this.veicolo = res[0];
      })
    })
  }

  editVeicolo(){
    this.veicoliSvc.update(this.veicolo).subscribe(res => {
      
    })
  }

}
