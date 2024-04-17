import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Veicoli } from 'src/app/classes/veicoli';
import { VeicoliService } from 'src/app/services/veicoli.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

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

}
