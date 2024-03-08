import { Component } from '@angular/core';
import { ServizioService } from 'src/app/servizio.service';
/*importa la classe Tagliandi quando avrai i dati per farla*/

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

tagliandi:any[] = [""];

constructor(
  private servizio:ServizioService
){}

ngOnInit(){

  this.servizio.getAll()
  .subscribe(tagliandi => {
    this.tagliandi = tagliandi;
  });

}

}
