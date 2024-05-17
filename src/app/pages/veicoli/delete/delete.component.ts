import { Component, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Veicoli } from 'src/app/classes/veicoli';
import { VeicoliService } from 'src/app/services/veicoli.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent {

 veicoli:Veicoli[] = [];
 veicolo:Veicoli = new Veicoli();

  constructor(private veicoliSvc: VeicoliService,
    private route:ActivatedRoute,
    public modalService:NgbModal
  ){}

  ngOnInit(){

    this.route.params.subscribe((params:any)=> {
      this.veicoliSvc.getById(params.id).subscribe(res => {
        this.veicolo = res[0];
      })
    })
    
    /*this.veicoliSvc.getAll()
    .subscribe(veicoli => {
      this.veicoli = veicoli;
    })*/
  }


  //Open modal
  open(){
    const modalRef = this.modalService.open(DeleteConfirmationModalComponent);
    modalRef.componentInstance.veicolo = this.veicolo;
    modalRef.result.then((res)=>{
      if(res == 'delete'){
        this.deleteVeicolo(this.veicolo);
      }
    }).catch((reason)=>{
      console.log('Modal dismissed with reason:', reason);
    });
  }

  deleteVeicolo(veicolo:Veicoli){
    this.veicoliSvc.delete(veicolo)
    .subscribe(()=>{
      this.veicoli = this.veicoli.filter(v=> v.id != veicolo.id)
    })
}


 }

 //Delete Confirmation Modal Component
 @Component({
  selector: 'app-delete-confirmation-modal',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Elimina veicolo</h4>
    <button
      type="button"
      class="btn-close"
      aria-describedby="modal-title"
      (click)="modal.dismiss('Cross click')"
    ></button>
  </div>
  <div class="modal-body">
    <p>
      <strong>Sei sicuro di voler dismettere questo veicolo?</strong>
    </p>
    <p>
      Se procedi il veicolo 
      <span class="text-danger">verrà eliminato</span> dalla lista di veicoli disponibili.
    </p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn my-btn" (click)="modal.dismiss('cancel click')">Chiudi</button>
    <button type="button" class="btn btn-danger border border-0 fw-bold" (click)="confirmDeletion()">Elimina</button>
  </div>
`,
 })



 export class DeleteConfirmationModalComponent {
  veicolo: Veicoli | undefined; // Input property to receive veicolo data from parent component

  constructor(
    public modal: NgbActiveModal,
    private veicoliSvc: VeicoliService
  ) {}

  dismissModal() {
    this.modal.dismiss('cancel click'); // Dismiss modal with cancel reason
  }

  confirmDeletion() {
    this.veicoliSvc.delete(this.veicolo!)
    .subscribe(() => {
      this.modal.close('delete'); // Close modal with delete reason
      console.log('veicolo eliminato')
    });
  }
}