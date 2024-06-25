export interface IScadenze {
    page:number,
    pageSize:number,
    text?:string,

    //Properties needed for customized search
    tipoVeicolo?:number,
    marca?:number,
    modello?:number,
    destinazioneDUso?:number,
    societa?:number,
    alimentazione?:number,
    allestimento?:number,
    tipoAsse?:number,
    cambio?:number,
    stato?:number,
    disponibilita?:number,

   
    targa?:string,
    telaio?:number,

    assicurazione_assistenza_stradale:string,
    id_assicurazione_assistenza_stradale:number,
    assicurazione_cristalli:string,
    id_assicurazione_cristalli:number,
    assicurazione_furto_incendio:string,
    id_assicurazione_furto_incendio:number,
    assicurazione_infortuni_conducente:string,
    id_assicurazione_infortuni_conducente:number,
    assicurazione_kasko:string,
    id_assicurazione_kasko:number,
    assicurazione_rca:string,
    id_assicurazione_rca:number,
    atp:string,
    id_atp:number,
    bollo:string,
    id_bollo:number,
    bombole:string,
    id_bombole:number,
    intervento:string,
    id_intervento:number,
    revisione:string,
    id_revisione:number,
    tachigrafo:string,
    id_tachigrafo:number,
    tagliando:string,
    id_tagliando:number,
    note:string

    arraySize:number
    id:number,
}
