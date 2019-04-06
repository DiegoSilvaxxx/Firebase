export class Cliente {

    nome: string;
    telefone: string;
    email: string;

    //dados do firebase
    setDados(abj : any) {
        this.nome = abj.nome;
        this.telefone = abj.telefone;
        this.email = abj.email;

    }

}
