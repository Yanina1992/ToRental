export class Veicoli {

    constructor(
    public id:number,
    
    public id_tipo_veicolo:number,
    public id_tipo_allestimento:number, 
    public id_marca:number, 
    public id_modello:number,

    public colore:string,
    
    public lunghezza_esterna:number,
    public larghezza_esterna:number,
    public massa:number,
    public portata:number,
    public cilindrata:number,
    public potenza:number,
    public numero_assi:number,
    public tipo_asse:number,
    public tipo_cambio:number,
    public alimentazione:number,
    public destinazione_uso:number,

    public id_proprietario?:number,

){}

}
