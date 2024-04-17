export interface IRegister {
    ///Da verificare se le proprietà sono effettivamente queste, in più ci saranno da fare delle verifiche sulla password/
    name:string;
    email:string;
    password:string;
    cognome?:string;
}
