export class Cliente {

    id : string;
    nome: string;
    telefone: string;
    email: string;

    constructor(){
        
    }

    //dados do firebase
    setDados(abj : any) {
        this.nome = abj.nome;
        this.telefone = abj.telefone;
        this.email = abj.email;

    }

}
